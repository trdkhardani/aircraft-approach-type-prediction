/*
  Warnings:

  - Added the required column `atis_info` to the `atis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "atis" ADD COLUMN     "atis_info" TEXT NOT NULL;
