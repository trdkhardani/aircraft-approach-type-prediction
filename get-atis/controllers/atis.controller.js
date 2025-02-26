const { PrismaClient } = require('@prisma/client');
const DateTimeUtils = require('../utils/datetime');
const prisma = new PrismaClient();

class AtisController {
    static async showAtisInfoHistory(req, res, next){
        try {
            const {
                airport_icao,
                page,
                limit
            } = req.query

            const skip = (page - 1) * limit;
    
            const atisInfoCount = await prisma.atis.count({
                where: {
                    airport: {
                        airport_icao: airport_icao
                    }
                }
            })

            const rvrInfoCount = await prisma.runways_rvr.count({
                where: {
                    airport: {
                        airport_icao: airport_icao
                    }
                }
            })

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
                            runways_rvr: {
                                orderBy: {
                                    rvr_added_at: 'asc'
                                }
                            },
                            airport_icao: true,
                        }
                    },
                },
                skip: parseInt(skip),
                take: parseInt(limit)
            })
    
            if(atisInfo.length === 0){
                throw {
                    statusCode: 404,
                    message: `No ATIS data history found for ${airport_icao}`
                }
            }

            // Create a lookup table for RVR data grouped by formatted datetime
            const rvrInfoLookup = {};
            atisInfo.forEach((atisData) => {
                atisData.airport.runways_rvr.forEach((rvrData) => {
                    const formattedDatetime = DateTimeUtils.formatDateTimeNoSecs(rvrData.rvr_added_at);

                    if (!rvrInfoLookup[formattedDatetime]) {
                        rvrInfoLookup[formattedDatetime] = [];
                    }
                    
                    // Prevent duplicate entries if already present
                    if (!rvrInfoLookup[formattedDatetime].some(entry => entry.runway_rvr_id === rvrData.runway_rvr_id)) {
                        rvrInfoLookup[formattedDatetime].push(rvrData);
                    }
                });
            });
            
            // Match ATIS data with RVRs that have the same formatted datetime
            const airportInfo = atisInfo.map((atisData) => {
                const formattedAtisDatetime = DateTimeUtils.formatDateTimeNoSecs(atisData.atis_added_at);

                return {
                    airport: atisData.airport.airport_icao,
                    atis: atisData.atis_info,
                    atis_added_at: {
                        raw: atisData.atis_added_at,
                        formatted: `${formattedAtisDatetime} GMT`
                    },
                    rvr_info: rvrInfoLookup[formattedAtisDatetime] || [] // Attach matching RVRs
                };
            });
            

            // const sortedAirportInfo = airportInfo.find()
    
            return res.json({
                status: 'success',
                page: parseInt(page),
                limit: parseInt(limit),
                total_atis_data: atisInfoCount,
                total_rvr_data: rvrInfoCount,
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