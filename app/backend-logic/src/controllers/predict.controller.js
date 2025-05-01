const FeatureUtils = require("../utils/feature-utils")
const AirportEncode = require("./one-hot-encode/airport")


class PredictController {
    static async dataInput(req, res, next){
        try {
            const {
                visibility,
                wind_speed,
                wind_gust,
                wind_direction,
                rvr,
                headwind,
                crosswind,
                ceiling,
                airport_icao
            } = req.body

            const airportOneHotEncode = AirportEncode.airportOneHotEncode(airport_icao);                     

            return res.json({
                status: 'success',
                message: `Input is valid`,
                airports: airportOneHotEncode.mappedCategories
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