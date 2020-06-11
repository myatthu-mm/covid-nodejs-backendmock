import express from 'express';
import bodyParser from 'body-parser';
// import apiRouter from './routes/api';
import router from './routes/api.js';
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config()
// Set up the express app
const app = express();


app.use(cors());
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// attach router
app.use(router)


app.listen(process.env.PORT, () => {
    console.log(`${process.env.HOST} server running on port ${process.env.PORT}`)
});