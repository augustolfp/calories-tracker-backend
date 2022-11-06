/*
  Warnings:

  - You are about to drop the column `carbsInGrams` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `fatsInGrams` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `proteinsInGrams` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `weightInGrams` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `baseUnit` on the `tacoTable` table. All the data in the column will be lost.
  - You are about to drop the column `carbUnit` on the `tacoTable` table. All the data in the column will be lost.
  - You are about to drop the column `fatUnit` on the `tacoTable` table. All the data in the column will be lost.
  - You are about to drop the column `proteinUnit` on the `tacoTable` table. All the data in the column will be lost.
  - Added the required column `carbs` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fats` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proteins` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "countedDays" ALTER COLUMN "notes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ingredients" DROP COLUMN "carbsInGrams",
DROP COLUMN "fatsInGrams",
DROP COLUMN "proteinsInGrams",
DROP COLUMN "weightInGrams",
ADD COLUMN     "carbs" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fats" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proteins" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "meals" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tacoTable" DROP COLUMN "baseUnit",
DROP COLUMN "carbUnit",
DROP COLUMN "fatUnit",
DROP COLUMN "proteinUnit";
