import foodList from './truncatedFinalFoodList.json';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (const food of foodList) {
    await prisma.tacoTable.create({
      data: food
    });
  }
}

main().catch(() => {
  process.exit(1);
});
