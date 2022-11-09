-- DropForeignKey
ALTER TABLE "ingredients" DROP CONSTRAINT "ingredients_mealId_fkey";

-- AddForeignKey
ALTER TABLE "ingredients" ADD CONSTRAINT "ingredients_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE CASCADE ON UPDATE CASCADE;
