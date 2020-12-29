import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/recipeRouter.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;


app
    .use(cors())
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/recipes/', router)
    .listen(PORT)

async function start() {
    try {
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })

        console.log(`DB Connected..!`);
    } catch (e) {
        console.log(`Error Occured while connecting to DB, ${e.message}`);
    }
};

start();