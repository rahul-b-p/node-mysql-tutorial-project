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

export const synchronizeDB = async () => {
    try {
        await sequelize.sync({ alter: true });
        logger.info("Database synchronized.");
    } catch (error) {
        logger.error("Database synchronization failed:", error);
    }
}