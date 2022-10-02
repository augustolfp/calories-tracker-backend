/*
  Warnings:

  - Added the required column `kcals` to the `tacoTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tacoTable" ADD COLUMN     "kcals" DOUBLE PRECISION NOT NULL;
