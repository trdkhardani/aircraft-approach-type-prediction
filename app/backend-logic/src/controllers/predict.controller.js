const FeatureUtils = require("../utils/feature-utils")

class PredictController {
    static async airportIcaoOneHotEncode(req, res, next){
        try {
            const {
                airport_icao
            } = req.body
    
            const airports = [
                {
                    value: "KATL",
                    binary: 0
                }, 
                {
                    value: "KIAD",
                    binary: 0
                }, 
                {
                    value: "KJFK",
                    binary: 0
                }, 
                {
                    value: "KLAX",
                    binary: 0
                }, 
                {
                    value: "KORD",
                    binary: 0
                }, 
                {
                    value: "KSFO",
                    binary: 0
                }
            ]

            let airportIcaoUpper = airport_icao.toUpperCase();

            const airportOneHotEncode = FeatureUtils.oneHotEncode("airport_icao", airports, airportIcaoUpper)

            if(!airportIcaoUpper){
                throw {
                    statusCode: 400,
                    message: "airport_icao field can't be empty"
                }
            } else if(!airportOneHotEncode.matchedCategory){
                throw {
                    statusCode: 400,
                    message: `${airportIcaoUpper} not found`
                }
            }                        

            return res.json({
                status: 'success',
                message: `Airport ${airportIcaoUpper} found`,
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