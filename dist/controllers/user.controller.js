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
exports.updateUser = exports.readUser = exports.createUser = void 0;
const models_1 = require("../models");
const logger_1 = require("../utils/logger");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: 'Invalid req body' });
            return;
        }
        const existingUser = yield models_1.User.findOne({ where: { email } });
        if (existingUser) {
            res.status(409).json({ message: "user already exists" });
            return;
        }
        const newUser = yield models_1.User.create({ username, email, password });
        res.status(201).json({ message: 'new user created successfully', Data: newUser });
    }
    catch (error) {
        logger_1.logger.error(error);
        res.status(500).json({ message: 'Something went wron at server side' });
    }
});
exports.createUser = createUser;
const readUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield models_1.User.findAll();
        res.status(200).json({ message: 'Fetched all users data', data: allUsers });
    }
    catch (error) {
        logger_1.logger.error(error);
        res.status(500).json({ message: 'Something went wron at server side' });
    }
});
exports.readUser = readUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: 'Invali id!' });
        }
        const { username, email, password } = req.body;
        if (!username && !email && !password) {
            res.status(400).json({ message: 'Invalid req body' });
            return;
        }
        if (email) {
            const existingUser = yield models_1.User.findOne({ where: { email } });
            if (existingUser) {
                res.status(409).json({ message: "user already exists" });
                return;
            }
        }
        const updatedUser = yield models_1.User.update({ email, password, username }, { where: { id } });
        if (!updatedUser) {
            res.status(404).json({ message: "user not found" });
            return;
        }
        const updatedData = yield models_1.User.findOne({ where: { id } });
        res.status(200).json({ message: "Updated successfully", data: updatedData });
    }
    catch (error) {
        logger_1.logger.error(error);
        res.status(500).json({ message: 'Something went wron at server side' });
    }
});
exports.updateUser = updateUser;
