const axios = require('axios');
const parseMETAR = require('metar');

const CHECKWX_METAR_API_URL = process.env.CHECKWX_METAR_API_URL;
const CHECKWX_API_KEY = process.env.CHECKWX_API_KEY;
const AIRPORTDBIO_API_URL = process.env.AIRPORTDBIO_API_URL;
const AIRPORTDBIO_API_TOKEN = process.env.AIRPORTDBIO_API_TOKEN;

class AirportController {
    static async getMetar(req, res, next){
        const airportIcao = req.params.airportIcao.toUpperCase();

        try {
            const rawMetar = await axios.get(`${CHECKWX_METAR_API_URL}/${airportIcao}`, {
                headers: {
                    'X-API-Key': CHECKWX_API_KEY
                }
            }).then((response) => {
                return response.data
            }).catch((error) => {
                console.log(error)
                throw {  
                    statusCode: error.status,
                    message: error.message,
                };
            })

            const decodedMetar = parseMETAR(rawMetar.data[0])

            return res.json({
                status: 'success',
                metar_info: {
                    raw: rawMetar.data[0],
                    decoded: decodedMetar
                }
            })
        } catch(err) {
            if(err.statusCode){
                return res.status(err.statusCode).json({
                    status: 'error',
                    message: err.message
                })
            }
            next(err)
        }
    }

    static async getRunways(req, res, next){
        const airportIcao = req.params.airportIcao.toUpperCase();

        try {
            const airportInfo = await axios.get(`${AIRPORTDBIO_API_URL}/${airportIcao}`, {
                params: {
                    'apiToken': AIRPORTDBIO_API_TOKEN
                }
            }).then((response) => {
                return response
            }).catch((error) => {
                console.log(error)
                throw {  
                    statusCode: error.status,
                    message: error.message,
                };
            })

            const airportRunways = airportInfo.data.runways.map((runway) => {
                return {
                    le: runway.le_ident,
                    he: runway.he_ident,
                }
            })

            const flatMapRunways = airportRunways.flatMap(runway => Object.values(runway))

            return res.json({
                status: 'success',
                data: flatMapRunways
            })
        } catch(err) {
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

module.exports = AirportController