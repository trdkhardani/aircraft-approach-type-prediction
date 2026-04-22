const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function airportSeed() {
  const airports = await prisma.airports.createMany({
    data: [
      {
        airport_icao: 'KLAX'
      },
      {
        airport_icao: 'KATL'
      },
      {
        airport_icao: 'KIAD'
      },
      {
        airport_icao: 'KORD'
      },
      {
        airport_icao: 'KSFO'
      },
      {
        airport_icao: 'KJFK'
      },
      {
        airport_icao: 'KBOS'
      },
      {
        airport_icao: 'KCMH'
      },
      {
        airport_icao: 'KEWR'
      },
      {
        airport_icao: 'KMIA'
      },
      {
        airport_icao: 'KSEA'
      },
      {
        airport_icao: 'KDEN'
      },
      {
        airport_icao: 'KCLT'
      },
    ]
  })
}

airportSeed()
.then(() => {
  console.log('Airports seeded successfully!')
})
.catch(err => {
  console.log(err)
});