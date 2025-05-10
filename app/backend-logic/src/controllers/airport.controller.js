const axios = require('axios');
const parseMETAR = require('metar');
const { redisClient, redisConnect } = require('../utils/redis');

const CHECKWX_METAR_API_URL = process.env.CHECKWX_METAR_API_URL;
const CHECKWX_API_KEY = process.env.CHECKWX_API_KEY;
const AIRPORTDBIO_API_URL = process.env.AIRPORTDBIO_API_URL;
const AIRPORTDBIO_API_TOKEN = process.env.AIRPORTDBIO_API_TOKEN;

class AirportController {
    static async getMetar(req, res, next){
        const airportIcao = req.params.airportIcao.toUpperCase();
        let isCached = false;
        let rawMetar;
        let decodedMetar;
        let key = `metar:${airportIcao}`

        redisConnect();

        try {
            const cacheResults = await redisClient.get(key);
            if(cacheResults) {
                isCached = true;
                console.log("Cache hit")

                const cachedMetarData = JSON.parse(cacheResults).data.toString();
                decodedMetar = parseMETAR(cachedMetarData)

                return res.json({
                    status: 'success',
                    from_cache: isCached,
                    metar_info: {
                        raw: cachedMetarData,
                        decoded: decodedMetar
                    }
                })
            }

            console.log("Cache miss")

            rawMetar = await axios.get(`${CHECKWX_METAR_API_URL}/${airportIcao}`, {
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

            await redisClient.set(key, JSON.stringify(rawMetar), {
                EX: 600
            })

            decodedMetar = parseMETAR(rawMetar.data[0])

            return res.json({
                status: 'success',
                from_cache: isCached,
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
        let isCached = false;
        const key = `runways:${airportIcao}`

        redisConnect();

        try {
            const cacheResults = await redisClient.get(key);
            if(cacheResults) {
                isCached = true;
                console.log("Cache hit")

                const cachedRunwayData = JSON.parse(cacheResults)

                return res.json({
                    status: 'success',
                    from_cache: isCached,
                    data: cachedRunwayData
                })
            }

            console.log("Cache miss")

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

            const runwayIdentifiers = airportInfo.data.runways.map((runway) => {
                return {
                    le: runway.le_ident,
                    he: runway.he_ident,
                }
            })

            const allRunwayDesignators = runwayIdentifiers.flatMap(runway => Object.values(runway))

            await redisClient.set(key, JSON.stringify(allRunwayDesignators), {
                EX: 5400
            })

            return res.json({
                status: 'success',
                from_cache: isCached,
                data: allRunwayDesignators 
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