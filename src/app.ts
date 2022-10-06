import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes/index';
import errorHandlerMW from './middlewares/errorHandlerMW';

const app = express();
app.use(express.json(), cors());
app.use(router);
app.use(errorHandlerMW);

export default app;
