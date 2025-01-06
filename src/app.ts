import { config } from 'dotenv';
import express from 'express';
import morgan_logger from 'morgan';
import { connectMySql, synchronizeDB } from './connections';
import { logger } from './utils/logger';
import { userRouter } from './routers';


config();

const app = express();

connectMySql();
synchronizeDB();

app.use(morgan_logger('dev'));

app.use(express.json());

app.use('/user', userRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    logger.info(`App Running successfully at http://localhost:${port}`);
})