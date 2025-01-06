import { config } from "dotenv";
import { Sequelize } from "sequelize";
config();

const dbname = process.env.DATABASE_NAME;
const dbUser = process.env.DB_USERNAME;
const dbPswd = process.env.DB_PASSWORD;

if (!dbname || !dbUser || !dbPswd) {
    process.exit(1);
}

export const sequelize = new Sequelize(dbname, dbUser, dbPswd, {
    host: 'localhost', // Replace with your server's hostname or IP
    dialect: 'mysql', // Specifies the SQL dialect
});

