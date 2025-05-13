const Joi = require('joi');

function validateData(airportIcao){
    const JoiSchema = Joi.object({
        visibility: Joi.number().required(),
        wind_speed: Joi.number().required(),
        wind_gust: Joi.number().required(),
        wind_direction: Joi.number().required(),
        rvr: Joi.string().required(),
        ceiling: Joi.number().required(),
        airport_icao: Joi.valid('KATL', 'KIAD', 'KJFK', 'KLAX', 'KORD', 'KSFO'),
        runway_designator: Joi.string().required(),
        weather_phenomenon: Joi.string().required(),
        runway_ils_category: Joi.valid('CAT I', 'CAT II', 'CAT III'),
    }).options({abortEarly: false})

    return JoiSchema.validate(airportIcao)
}

module.exports = validateData;