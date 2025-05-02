const AirportEncode = require("../core/encoders/airport");
const RunwayEncode = require("../core/encoders/runway");
const RvrTendencyEncode = require("../core/encoders/rvr-tendency");
const WeatherEncode = require("../core/encoders/weather");
const DataMapper = require("../utils/data-mapper");
const validateData = require("../validation/input.schema");
const axios = require('axios');

class PredictController {
    static async dataInput(req, res, next){
        try {
            const requiredData = {
                visibility: Math.round(req.body.visibility * 10) / 10,
                wind_speed: Math.round(req.body.wind_speed * 10) / 10,
                wind_gust: Math.round(req.body.wind_gust * 10) / 10,
                wind_direction: Math.round(req.body.wind_direction * 10) / 10,
                rvr: Math.round(req.body.rvr * 10) / 10,
                headwind: Math.round(req.body.headwind * 10) / 10,
                crosswind: Math.round(req.body.crosswind * 10) / 10,
                ceiling: Math.round(req.body.ceiling * 10) / 10,
                airport_icao: req.body.airport_icao.toUpperCase(),
                runway_designator_side: req.body.runway_designator_side.toUpperCase(),
                weather_phenomenon: req.body.weather_phenomenon.toUpperCase(),
                runway_designator_number: req.body.runway_designator_number,
                rvr_tendency: req.body.rvr_tendency,
                runway_ils_category: req.body.runway_ils_category.toUpperCase(),
            }

            const response = validateData(requiredData)

            if(response.error){
                throw {
                    statusCode: 400,
                    message: response.error.details
                }
            }

            const airportIcaoData = AirportEncode.airportOneHotEncode(requiredData.airport_icao);
            const runwayDesignatorSideData = RunwayEncode.runwayDesignatorSideOneHotEncode(requiredData.runway_designator_side)
            const weatherPhenomenaData =  WeatherEncode.weatherOneHotEncode(requiredData.weather_phenomenon)
            const runwayDesignatorNumberData = RunwayEncode.runwayDesignatorNumberOneHotEncode(requiredData.runway_designator_number)
            const rvrTendencyData = RvrTendencyEncode.rvrTendencyOneHotEncode(requiredData.rvr_tendency)
            const runwayIlsCategoryData = RunwayEncode.runwayIlsCategoryOneHotEncode(requiredData.runway_ils_category)

            const mappedAirportIcaoData = DataMapper.mapOneHotEncodedData(airportIcaoData);
            const mappedRunwayDesignatorSideData = DataMapper.mapOneHotEncodedData(runwayDesignatorSideData);
            const mappedWeatherPhenomenaData = DataMapper.mapOneHotEncodedData(weatherPhenomenaData);
            const mappedRunwayDesignatorNumberData = DataMapper.mapOneHotEncodedData(runwayDesignatorNumberData);
            const mappedRvrTendencyData = DataMapper.mapOneHotEncodedData(rvrTendencyData);
            const mappedRunwayIlsCategoryData =  DataMapper.mapOneHotEncodedData(runwayIlsCategoryData);

            const features = []
            features.push(requiredData.visibility, requiredData.wind_speed, requiredData.wind_gust, 
                requiredData.wind_direction, requiredData.rvr, requiredData.headwind, 
                requiredData.crosswind, requiredData.ceiling, ...mappedAirportIcaoData, ...mappedRunwayDesignatorSideData,
            ...mappedWeatherPhenomenaData, ...mappedRunwayDesignatorNumberData, ...mappedRvrTendencyData, 
            ...mappedRunwayIlsCategoryData)

            const sendInputData = await axios.post(`${process.env.MODEL_URL}/predict`, {
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

            /* will use this later */
            // sendInputData.probabilities.forEach((proba, index, probas) => {
            //     probas[index] = proba * 100
            // })

            return res.json({
                status: 'success',
                message: `Valid input`,
                model_output: sendInputData,
                input_data: {
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
                }
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