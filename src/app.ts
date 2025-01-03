import { config } from 'dotenv';
import express from 'express';
import morgan_logger from 'morgan';
import { connectMySql } from './connections';
import { logger } from './utils/logger';


config();

const app = express();

connectMySql();

app.use(morgan_logger('dev'));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    logger.info(`App Running successfully at http://localhost:${port}`);
})