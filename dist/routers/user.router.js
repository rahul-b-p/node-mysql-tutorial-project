"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.router = (0, express_1.Router)();
exports.router.post('/', controllers_1.userController.createUser);
exports.router.get('/', controllers_1.userController.readUser);
