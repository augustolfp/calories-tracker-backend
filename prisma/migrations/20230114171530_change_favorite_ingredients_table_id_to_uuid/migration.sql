/*
  Warnings:

  - The primary key for the `favoriteIngredients` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "favoriteIngredients" DROP CONSTRAINT "favoriteIngredients_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "favoriteIngredients_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "favoriteIngredients_id_seq";
