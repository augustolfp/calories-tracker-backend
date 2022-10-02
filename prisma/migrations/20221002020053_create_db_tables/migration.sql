-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mealId" INTEGER NOT NULL,
    "weightInGrams" DOUBLE PRECISION NOT NULL,
    "carbsInGrams" DOUBLE PRECISION NOT NULL,
    "fatsInGrams" DOUBLE PRECISION NOT NULL,
    "proteinsInGrams" DOUBLE PRECISION NOT NULL,
    "kcals" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countedDays" (
    "id" SERIAL NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "notes" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "countedDays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countedDaysMeals" (
    "id" SERIAL NOT NULL,
    "countedDayId" INTEGER NOT NULL,
    "mealId" INTEGER NOT NULL,

    CONSTRAINT "countedDaysMeals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tacoTable" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "baseQty" DOUBLE PRECISION NOT NULL,
    "baseUnit" TEXT NOT NULL,
    "proteins" DOUBLE PRECISION NOT NULL,
    "proteinUnit" TEXT NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "carbUnit" TEXT NOT NULL,
    "fats" DOUBLE PRECISION NOT NULL,
    "fatUnit" TEXT NOT NULL,

    CONSTRAINT "tacoTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "meals" ADD CONSTRAINT "meals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredients" ADD CONSTRAINT "ingredients_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "countedDays" ADD CONSTRAINT "countedDays_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "countedDaysMeals" ADD CONSTRAINT "countedDaysMeals_countedDayId_fkey" FOREIGN KEY ("countedDayId") REFERENCES "countedDays"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "countedDaysMeals" ADD CONSTRAINT "countedDaysMeals_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
