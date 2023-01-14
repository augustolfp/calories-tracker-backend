import { Ingredients, FavoriteIngredients } from '@prisma/client';

export type IIngredientData = Omit<Ingredients, 'id'>;
export type IFavoriteIngredientData = Omit<FavoriteIngredients, 'id'>;
