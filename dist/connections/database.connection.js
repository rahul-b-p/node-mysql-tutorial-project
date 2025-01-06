"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.synchronizeDB = exports.connectMySql = void 0;
const config_1 = require("../config");
const logger_1 = require("../utils/logger");
const connectMySql = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield config_1.sequelize.authenticate();
        logger_1.logger.info(`connected successfully`);
    }
    catch (error) {
        logger_1.logger.error(`connection failed due to ${error.message}`);
    }
});
exports.connectMySql = connectMySql;
const synchronizeDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield config_1.sequelize.sync({ alter: true });
        logger_1.logger.info("Database synchronized.");
    }
    catch (error) {
        logger_1.logger.error("Database synchronization failed:", error);
    }
});
exports.synchronizeDB = synchronizeDB;
