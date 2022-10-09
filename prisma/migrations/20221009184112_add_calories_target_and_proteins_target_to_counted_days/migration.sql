/*
  Warnings:

  - Added the required column `caloriesTarget` to the `countedDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proteinsTarget` to the `countedDays` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "countedDays" ADD COLUMN     "caloriesTarget" INTEGER NOT NULL,
ADD COLUMN     "proteinsTarget" INTEGER NOT NULL;
