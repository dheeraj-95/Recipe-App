import Recipe from '../models/recipeModel';

export const getRecipes = async (req, res) => {
    try{
        const getAllRecipes = await Recipe.find({})
        res.status(200).json(getAllRecipes);
    }catch({message}){
        res.status(404).json({message})
    } 
}

export const getRecipe = async (req, res ) => {
    try{
        const id = req.params.id;
        const recipe = await Recipe.findOne({_id : id});
        res.status(200).json(recipe);
    }catch({message}){
        res.status(404).json({message})
    }
}

export const createRecipe = async (req, res ) => {
    try{
        const {body} = req.body;
        const recipe = new Recipe(body);

        await Recipe.save();
        res.status(201).json(recipe);
    }catch({message}){
        res.status(500).json({message})
    }
}

export const updateRecipe = async (req, res ) => {
    try{
        const id = req.params.id;
        const {body} = req.body;
        await Recipe.findOneAndUpdate({_id : id}, body);
        res.status(200).json({message : 'Recipe Updated'});
    }catch({message}){
        res.status(400).json({message})
    }
}

export const deleteRecipe = async (req, res ) => {
    try{
        const id = req.params.id;
        const recipe = await Recipe.deleteOne({_id : id});
        res.status(200).json({message : 'Recipe Deleted'});
    }catch({message}){
        res.status(400).json({message})
    }
}