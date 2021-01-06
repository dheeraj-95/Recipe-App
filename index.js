import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import router from './routes/recipeRouter.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'recipefrontend', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'recipefrontend', 'build', 'index.html'));
})

app.use('/recipes', router)
app.listen(PORT)

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