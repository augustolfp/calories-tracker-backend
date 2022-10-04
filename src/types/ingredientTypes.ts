import { Ingredients } from '@prisma/client';

export type IIngredientData = Omit<Ingredients, 'id'>;
