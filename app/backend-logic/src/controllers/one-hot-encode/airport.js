const FeatureUtils = require("../../utils/feature-utils")

class AirportEncode {
    static airportOneHotEncode(airportIcao){
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
    
        let airportIcaoUpper = airportIcao.toUpperCase();
    
        
        if(!airportIcaoUpper){
            throw {
                statusCode: 400,
                message: "airport_icao field can't be empty"
            }
        } 
        
        const airportOneHotEncode = FeatureUtils.oneHotEncode(airportIcao, airports, airportIcaoUpper)
    
        return {
            mappedCategories: airportOneHotEncode.mappedCategories
        }
    }
}


module.exports = AirportEncode