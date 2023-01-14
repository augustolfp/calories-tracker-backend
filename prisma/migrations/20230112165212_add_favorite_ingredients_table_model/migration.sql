-- CreateTable
CREATE TABLE "favoriteIngredients" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "baseQty" DOUBLE PRECISION NOT NULL,
    "proteins" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "fats" DOUBLE PRECISION NOT NULL,
    "kcals" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "favoriteIngredients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "favoriteIngredients" ADD CONSTRAINT "favoriteIngredients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
