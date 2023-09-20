import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes/index';
import errorHandlerMW from './middlewares/errorHandlerMW';

dotenv.config();
const app = express();

const URL_PATH_PREFIX = process.env.URL_PATH_PREFIX;

app.use(express.json(), cors());
app.use(URL_PATH_PREFIX, router);
app.use(errorHandlerMW);

export default app;
