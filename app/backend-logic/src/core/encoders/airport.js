const FeatureUtils = require("./generic")

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
        
        const encodedAirportIcao = FeatureUtils.oneHotEncode("airport_icao", airports, airportIcaoUpper)
    
        return {
            mappedCategories: encodedAirportIcao.mappedCategories
        }
    }
}


module.exports = AirportEncode