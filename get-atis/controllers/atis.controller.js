const { PrismaClient } = require('@prisma/client');
const DateTimeUtils = require('../utils/datetime');
const prisma = new PrismaClient();

class AtisController {
    static async showAtisInfoHistory(req, res, next){
        try {
            const {
                airport_icao,
            } = req.query
    
            const atisInfo = await prisma.atis.findMany({
                where: {
                    airport: {
                        airport_icao: airport_icao,
                    }
                },
                orderBy: {
                    atis_added_at: 'asc'
                },
                select: {
                    atis_info: true,
                    atis_added_at: true,
                    airport: {
                        select: {
                            runways_rvr: true,
                            airport_icao: true,
                        }
                    },
                }
            })

            // const atisInfo = await prisma.runways_rvr.findMany({
            //     where: {
            //         airport: {
            //             airport_icao: airport_icao,
            //         }
            //     },
            //     orderBy: {
            //         rvr_added_at: 'asc',
            //     },
            //     select: {
            //         rvr: true,
            //         runway_code: true,
            //         rvr_added_at: true,
            //         airport: {
            //             select: {
            //                 atis: true
            //             }
            //         }
            //     }
            // })
    
            if(atisInfo.length === 0){
                throw {
                    statusCode: 404,
                    message: `No ATIS data history found for ${airport_icao}`
                }
            }

            const rvrInfo = atisInfo.map((runwaysRvr) => {
                return runwaysRvr.airport.runways_rvr.map((rvrInfo) => {
                    return {
                        runway_rvr_id: rvrInfo.runway_rvr_id,
                        runway_code: rvrInfo.runway_code,
                        rvr: rvrInfo.rvr,
                        rvr_added_at: rvrInfo.rvr_added_at,
                    }
                })
            })

            const airportInfo = atisInfo.map((airportInfo) => {
                return {
                    airport: airportInfo.airport.airport_icao,
                    atis: airportInfo.atis_info,
                    atis_added_at: {
                        raw: airportInfo.atis_added_at,
                        formatted: DateTimeUtils.formatDateTimeNoSecs(airportInfo.atis_added_at)
                    },
                    rvr_info: airportInfo.airport.runways_rvr.map((rvrInfo) => {
                        
                        return {
                            runway_rvr_id: rvrInfo.runway_rvr_id,
                            runway_code: rvrInfo.runway_code,
                            rvr: rvrInfo.rvr,
                            rvr_added_at: {
                                raw: rvrInfo.rvr_added_at,
                                formatted: DateTimeUtils.formatDateTimeNoSecs(rvrInfo.rvr_added_at)
                            },
                        }
                    })
                }
            })

            // const sortedAirportInfo = airportInfo.find()
    
            return res.json({
                status: 'success',
                // airport_info: atisInfo,
                airport_info: airportInfo,
            })
        } catch(err){
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

module.exports = AtisController;