/*
  Warnings:

  - Added the required column `airport_icao` to the `atis_rvr` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "atis_rvr" ADD COLUMN     "airport_icao" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
