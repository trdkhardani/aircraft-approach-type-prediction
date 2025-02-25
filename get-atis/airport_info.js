const axios = require('axios');
const rvr = require('rvr')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAirportInfo = async (airportIcao) => {
    try {
        const response = await axios.get(`https://datis.clowd.io/api/${airportIcao}`);
        const result = {
            airport: response.data[0].airport,
            atis: response.data[0].datis,
        }

        const airport = await prisma.airports.findFirst({
            where: {
                airport_icao: airportIcao
            },
            select: {
                airport_id: true
            }
        })

        // console.log(result)
        const rvrInfo = await rvr(airportIcao.slice(1)).then(result => JSON.parse(JSON.stringify(result, null, 2)))

        let insertRvrInfo;
        for(let i = 0; i <= rvrInfo.rvrValues.length - 1; i++){
            insertRvrInfo = await prisma.runways_rvr.create({
                data: {
                    airport_id: airport.airport_id,
                    runway_code: rvrInfo.rvrValues[i].RWY,
                    rvr: rvrInfo.rvrValues[i].TD
                }
            })
        }

        console.log(insertRvrInfo)

        const insertAirportInfo = await prisma.atis.create({
            data: {
                airport_id: airport.airport_id,
                atis_info: result.atis,
            }
        })

        console.log(insertAirportInfo)
    } catch(err) {
        console.log(err)
    }
}


(async () => {
    console.log("Fetching ATIS and RVR Data...")
    // initial execution
    await Promise.all([
        getAirportInfo("KLAX"),
        getAirportInfo("KATL"),
        getAirportInfo("KIAD"),
        getAirportInfo("KORD"),
        getAirportInfo("KSFO")
    ]);

    setInterval(async () => {
        await Promise.all([
            getAirportInfo("KLAX"),
            getAirportInfo("KATL"),
            getAirportInfo("KIAD"),
            getAirportInfo("KORD"),
            getAirportInfo("KSFO")
        ]);
    }, 3600000);
})();