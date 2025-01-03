import { sequelize } from "../config";
import { logger } from "../utils/logger";


export const connectMySql = async () => {
    try {
        await sequelize.authenticate();
        logger.info(`connected successfully`);
    } catch (error: any) {
        logger.error(`connection failed due to ${error.message}`)
    }
}