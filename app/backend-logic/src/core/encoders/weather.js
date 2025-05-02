const weather_phenomena = require("../../config/categories/weather_phenomena");
const FeatureUtils = require("./generic");

class WeatherEncode {
    static weatherOneHotEncode(weatherPhenomenon){
        let weatherPhenomenonUpper = weatherPhenomenon.toUpperCase();

        const encodedWeatherPhenomenon = FeatureUtils.oneHotEncode("weather_phenomenon", weather_phenomena, weatherPhenomenonUpper)

        return {
            mappedCategories: encodedWeatherPhenomenon.mappedCategories
        }
    }
}

module.exports = WeatherEncode;