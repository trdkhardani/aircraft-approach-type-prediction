const { PrismaClient} = require('../generated/prisma/client')
const prisma = new PrismaClient()

const AirportEncode = require("../core/encoders/airport");
const RunwayEncode = require("../core/encoders/runway");
const RvrTendencyEncode = require("../core/encoders/rvr-tendency");
const WeatherEncode = require("../core/encoders/weather");
const PreprocessRawInput = require("../core/preprocess");
const DataMapper = require("../utils/data-mapper");
const validateData = require("../validation/input.schema");
const axios = require('axios');

class PredictController {
    static async dataInput(req, res, next){
        try {
            const { debug, airport_feats } = req.query

            const requiredData = {
                visibility: parseFloat(req.body.visibility),
                wind_speed: parseInt(req.body.wind_speed),
                wind_gust: parseInt(req.body.wind_gust),
                wind_direction: parseInt(req.body.wind_direction),
                rvr: req.body.rvr,
                ceiling: parseFloat(req.body.ceiling),
                airport_icao: req.body.airport_icao.toUpperCase(),
                runway_designator: req.body.runway_designator.toUpperCase(),
                weather_phenomenon: req.body.weather_phenomenon.toUpperCase(),
                runway_ils_category: req.body.runway_ils_category.toUpperCase(),
            }

            const response = validateData(requiredData)

            if(response.error){
                throw {
                    statusCode: 400,
                    message: response.error.details
                }
            }

            const preprocessRawInput = new PreprocessRawInput(requiredData.runway_designator)
            const preprocessRvr = PreprocessRawInput.separateRvrComponents(requiredData.rvr)
            const preprocessWind = preprocessRawInput._calculateWindComponents(requiredData.wind_speed, requiredData.wind_direction)
            const preprocessRunway = preprocessRawInput._separateRunwayComponents()

            const airportIcaoData = AirportEncode.airportOneHotEncode(requiredData.airport_icao);
            const runwayDesignatorSideData = RunwayEncode.runwayDesignatorSideOneHotEncode(preprocessRunway.runway_designator_side)
            const weatherPhenomenaData =  WeatherEncode.weatherOneHotEncode(requiredData.weather_phenomenon)
            const runwayDesignatorNumberData = RunwayEncode.runwayDesignatorNumberOneHotEncode(preprocessRunway.runway_designator_number)
            const rvrTendencyData = RvrTendencyEncode.rvrTendencyOneHotEncode(preprocessRvr.rvr_tendency)
            const runwayIlsCategoryData = RunwayEncode.runwayIlsCategoryOneHotEncode(requiredData.runway_ils_category)

            const mappedAirportIcaoData = DataMapper.mapOneHotEncodedData(airportIcaoData);
            const mappedRunwayDesignatorSideData = DataMapper.mapOneHotEncodedData(runwayDesignatorSideData);
            const mappedWeatherPhenomenaData = DataMapper.mapOneHotEncodedData(weatherPhenomenaData);
            const mappedRunwayDesignatorNumberData = DataMapper.mapOneHotEncodedData(runwayDesignatorNumberData);
            const mappedRvrTendencyData = DataMapper.mapOneHotEncodedData(rvrTendencyData);
            const mappedRunwayIlsCategoryData =  DataMapper.mapOneHotEncodedData(runwayIlsCategoryData);

            const features = []
            let modelPredictionEndpoint;
            if(airport_feats.toLowerCase() === "true"){
                // if airport_feats is "true", add weather-related and airport-related features as input
                modelPredictionEndpoint = `${process.env.MODEL_URL}/predict/with-airport-feats`
                features.push(requiredData.visibility, requiredData.wind_speed, requiredData.wind_gust, 
                    requiredData.wind_direction, preprocessRvr.rvr, preprocessWind.headwind, 
                    preprocessWind.crosswind, requiredData.ceiling, ...mappedAirportIcaoData, ...mappedRunwayDesignatorSideData,
                ...mappedWeatherPhenomenaData, ...mappedRunwayDesignatorNumberData, ...mappedRvrTendencyData, 
                ...mappedRunwayIlsCategoryData) 
            } else {
                // if airport_feats is not "true", add only weather-related features as input and airport-related features would be ignored
                modelPredictionEndpoint = `${process.env.MODEL_URL}/predict/no-airport-feats`
                features.push(requiredData.visibility, requiredData.wind_speed, requiredData.wind_gust, 
                requiredData.wind_direction, preprocessRvr.rvr, preprocessWind.headwind, 
                preprocessWind.crosswind, requiredData.ceiling, ...mappedWeatherPhenomenaData, 
                ...mappedRvrTendencyData)
            }

            const sendInputData = await axios.post(`${modelPredictionEndpoint}`, {
                features: features
            })
            .then((response) => {
                // console.log(response.data)
                return response.data
            })
            .catch((error) => {
                console.log(error)
                throw {  
                    statusCode: error.status,
                    message: `Prediction failed - ${error.message}`,
                };
            })

            let predictionResults = []
            for(let i = 0; i < sendInputData.probabilities.length; i++){
                let approachType;
                switch(i){
                    case 0:
                        approachType = "ILS";
                        break;
                    case 1:
                        approachType = "RNAV";
                        break;
                    case 2:
                        approachType = "RNP";
                        break;
                    case 3:
                        approachType = "Visual";
                        break;
                }

                let results = {
                        approach_type: approachType,
                        prediction: sendInputData.prediction[0][i],
                        probability: sendInputData.probabilities[i],
                }
                predictionResults.push(results)
            }
            // sort by probability in descending order
            predictionResults.sort((a, b) => b.probability - a.probability)

            // log/save prediction variables and results
            const logPredictionResults = await prisma.prediction_logs.create({
                data: {
                    prediction_log_airport_icao: airport_feats.toLowerCase() === "true" ? requiredData.airport_icao : null,
                    prediction_log_runway_designator_number: airport_feats.toLowerCase() === "true" ? preprocessRunway.runway_designator_number : null,
                    prediction_log_runway_designator_side: airport_feats.toLowerCase() === "true" ? preprocessRunway.runway_designator_side : null,
                    prediction_log_runway_ils_category: airport_feats.toLowerCase() === "true" ? requiredData.runway_ils_category : null,
                    prediction_log_visibility: requiredData.visibility,
                    prediction_log_wind_speed: requiredData.wind_speed,
                    prediction_log_wind_gust: requiredData.wind_speed,
                    prediction_log_wind_direction: requiredData.wind_direction,
                    prediction_log_rvr: requiredData.rvr,
                    prediction_log_headwind: preprocessWind.headwind,
                    prediction_log_crosswind: preprocessWind.crosswind,
                    prediction_log_ceiling: requiredData.ceiling,
                    prediction_log_weather_phenomenon: requiredData.weather_phenomenon,
                    prediction_log_ils_label: sendInputData.prediction[0][0],
                    prediction_log_rnav_label: sendInputData.prediction[0][1],
                    prediction_log_rnp_label: sendInputData.prediction[0][2],
                    prediction_log_visual_label: sendInputData.prediction[0][3],
                }
            })

            return res.json({
                status: 'success',
                message: `Valid input`,
                model_output: {
                    prediction_log_id: logPredictionResults.prediction_log_id,
                    paired_results: predictionResults
                },
                input_data: debug === "true" ? { // "true" value in debug query parameter will show input values
                    processed: {
                        features
                    },
                    raw: {
                        visibility: requiredData.visibility,
                        wind_speed: requiredData.wind_speed,
                        wind_gust: requiredData.wind_gust,
                        wind_direction: requiredData.wind_direction,
                        rvr: requiredData.rvr,
                        headwind: requiredData.headwind,
                        crosswind: requiredData.crosswind,
                        ceiling: requiredData.ceiling,
                        airport: airportIcaoData.mappedCategories,
                        runway_designator_side: runwayDesignatorSideData.mappedCategories,
                        weather_phenomenon: weatherPhenomenaData.mappedCategories,
                        runway_designator_number: runwayDesignatorNumberData.mappedCategories,
                        rvr_tendency: rvrTendencyData.mappedCategories,
                        runway_ils_category: runwayIlsCategoryData.mappedCategories,
                    }
                } : null
            })
        }
        catch(err){
            if(err.statusCode){
                return res.status(err.statusCode).json({
                    status: 'error',
                    message: err.message
                })
            }
            next(err)
        }
    }
}

module.exports = PredictController;