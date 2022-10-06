/*
  Warnings:

  - You are about to drop the column `userId` on the `meals` table. All the data in the column will be lost.
  - You are about to drop the `countedDaysMeals` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `countedDayId` to the `meals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "countedDaysMeals" DROP CONSTRAINT "countedDaysMeals_countedDayId_fkey";

-- DropForeignKey
ALTER TABLE "countedDaysMeals" DROP CONSTRAINT "countedDaysMeals_mealId_fkey";

-- DropForeignKey
ALTER TABLE "meals" DROP CONSTRAINT "meals_userId_fkey";

-- AlterTable
ALTER TABLE "meals" DROP COLUMN "userId",
ADD COLUMN     "countedDayId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "countedDaysMeals";

-- AddForeignKey
ALTER TABLE "meals" ADD CONSTRAINT "meals_countedDayId_fkey" FOREIGN KEY ("countedDayId") REFERENCES "countedDays"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
