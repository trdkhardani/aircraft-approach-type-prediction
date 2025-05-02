const Joi = require('joi');

function validateData(airportIcao){
    const JoiSchema = Joi.object({
        visibility: Joi.number().required(),
        wind_speed: Joi.number().required(),
        wind_gust: Joi.number().required(),
        wind_direction: Joi.number().required(),
        rvr: Joi.number().required(),
        headwind: Joi.number().required(),
        crosswind: Joi.number().required(),
        ceiling: Joi.number().required(),
        airport_icao: Joi.valid('KATL', 'KIAD', 'KJFK', 'KLAX', 'KORD', 'KSFO'),
        runway_designator_side: Joi.valid('C', 'L', 'R', 'X'),
        // weather_phenomenon: Joi.valid('C', 'L', 'R', 'X'),
        // runway_designator_number: Joi.valid('C', 'L', 'R', 'X'),
        weather_phenomenon: Joi.string().required(),
        runway_designator_number: Joi.string().required(),
        rvr_tendency: Joi.valid('Deteriorating', 'Excellent', 'Improving', 'Stable'),
        runway_ils_category: Joi.valid('CAT I', 'CAT II', 'CAT III'),
    }).options({abortEarly: false})

    return JoiSchema.validate(airportIcao)
}

module.exports = validateData;