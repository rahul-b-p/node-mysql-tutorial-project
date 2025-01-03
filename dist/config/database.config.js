"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = require("dotenv");
const sequelize_1 = require("sequelize");
(0, dotenv_1.config)();
const dbname = process.env.DATABASE_NAME;
const dbUser = process.env.DB_USERNAME;
const dbPswd = process.env.DB_PASSWORD;
if (!dbname || !dbUser || !dbPswd) {
    process.exit(1);
}
exports.sequelize = new sequelize_1.Sequelize(dbname, dbUser, dbPswd, {
    host: 'localhost', // Replace with your server's hostname or IP
    dialect: 'mysql', // Specifies the SQL dialect
});
