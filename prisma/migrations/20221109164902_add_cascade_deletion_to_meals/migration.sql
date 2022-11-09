-- DropForeignKey
ALTER TABLE "meals" DROP CONSTRAINT "meals_countedDayId_fkey";

-- AddForeignKey
ALTER TABLE "meals" ADD CONSTRAINT "meals_countedDayId_fkey" FOREIGN KEY ("countedDayId") REFERENCES "countedDays"("id") ON DELETE CASCADE ON UPDATE CASCADE;
