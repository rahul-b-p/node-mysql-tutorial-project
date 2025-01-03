"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const connections_1 = require("./connections");
const logger_1 = require("./utils/logger");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
(0, connections_1.connectMySql)();
app.use((0, morgan_1.default)('dev'));
const port = process.env.PORT || 5000;
app.listen(port, () => {
    logger_1.logger.info(`App Running successfully at http://localhost:${port}`);
});
