import Router from 'express';

import{
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
} from '../controllers/recipeController'

const router = Router();

router
    .get('/', getRecipes)
    .get('/:id', getRecipe)
    .post('/', createRecipe)
    .put('/:id', updateRecipe)
    .delete('/:id', deleteRecipe)

export default router;