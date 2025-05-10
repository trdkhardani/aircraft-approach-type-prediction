const axios = require('axios');
const parseMETAR = require('metar');
const rvr = require('rvr');
const { redisClient, redisConnect } = require('../utils/redis');

const CHECKWX_METAR_API_URL = process.env.CHECKWX_METAR_API_URL;
const CHECKWX_API_KEY = process.env.CHECKWX_API_KEY;
const AIRPORTDBIO_API_URL = process.env.AIRPORTDBIO_API_URL;
const AIRPORTDBIO_API_TOKEN = process.env.AIRPORTDBIO_API_TOKEN;

class AirportController {
    static async getMetar(req, res, next){
        const airportIcao = req.params.airportIcao.toUpperCase();
        let isCached = false;
        let key = `metar:${airportIcao}`

        redisConnect();

        try {
            const cacheResults = await redisClient.get(key);
            if(cacheResults) {
                isCached = true;
                console.log("Cache hit")

                const cachedMetarData = JSON.parse(cacheResults);

                return res.json({
                    status: 'success',
                    from_cache: isCached,
                    metar_info: cachedMetarData
                })
            }

            console.log("Cache miss")

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
            
            const combinedMetarData = {
                raw: rawMetar.data[0],
                decoded: decodedMetar
            }

            await redisClient.set(key, JSON.stringify(combinedMetarData), {
                EX: 600
            })

            return res.json({
                status: 'success',
                from_cache: isCached,
                metar_info: combinedMetarData
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

    static async getRvr(req, res, next){
        const airportIcao = req.params.airportIcao.toUpperCase();
        let isCached = false;
        let key = `rvr:${airportIcao}`

        redisConnect();

        try {
            const cacheResults = await redisClient.get(key);
            if(cacheResults) {
                isCached = true;
                console.log("Cache hit")

                const cachedRvrData = JSON.parse(cacheResults)

                return res.json({
                    status: 'success',
                    from_cache: isCached,
                    rvr_data: cachedRvrData
                })
            }

            console.log("Cache miss")

            const rvrData = await rvr(airportIcao.slice(1)).then(result => JSON.parse(JSON.stringify(result, null, 2)));

            const rvrEachRunway = rvrData.rvrValues.map((rvr) => {
                return {
                    runway: rvr.RWY,
                    rvr_TD: rvr.TD,
                }
            })

            const extractedRvrData = {
                last_updated: rvrData.lastUpdated,
                rvr: rvrEachRunway,
            }

            await redisClient.set(key, JSON.stringify(extractedRvrData), {
                EX: 600
            })

            return res.json({
                status: 'success',
                from_cache: isCached,
                rvr_data: extractedRvrData,
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