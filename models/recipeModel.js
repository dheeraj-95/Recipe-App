import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title : String,
    image : String,
    description : String,
    ingredients : String,
    instruction : String,
    category: String,
    portion: String,
    time : String,
    date : {
        type : Date,
        default : Date.now
    }
});

export default mongoose.model('recipes',recipeSchema);