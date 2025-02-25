const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAirportId(){
    const airportId = await prisma.airports.findFirst({
        where: {
            airport_icao: 'KLAX'
        },
        select: {
            airport_id: true
        }
    })

    console.log(airportId)
}

getAirportId()