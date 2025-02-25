/*
  Warnings:

  - You are about to drop the `atis_rvr` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "atis_rvr";

-- CreateTable
CREATE TABLE "airports" (
    "airport_id" SERIAL NOT NULL,
    "airport_icao" TEXT NOT NULL,

    CONSTRAINT "airports_pkey" PRIMARY KEY ("airport_id")
);

-- CreateTable
CREATE TABLE "atis" (
    "atis_id" SERIAL NOT NULL,
    "airport_id" INTEGER NOT NULL,
    "rvr" TEXT NOT NULL,
    "atis_added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "atis_pkey" PRIMARY KEY ("atis_id")
);

-- CreateTable
CREATE TABLE "runways_rvr" (
    "runway_rvr_id" SERIAL NOT NULL,
    "airport_id" INTEGER NOT NULL,
    "runway_code" TEXT NOT NULL,
    "rvr" TEXT NOT NULL,
    "rvr_added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "runways_rvr_pkey" PRIMARY KEY ("runway_rvr_id")
);

-- AddForeignKey
ALTER TABLE "atis" ADD CONSTRAINT "atis_airport_id_fkey" FOREIGN KEY ("airport_id") REFERENCES "airports"("airport_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "runways_rvr" ADD CONSTRAINT "runways_rvr_airport_id_fkey" FOREIGN KEY ("airport_id") REFERENCES "airports"("airport_id") ON DELETE RESTRICT ON UPDATE CASCADE;
