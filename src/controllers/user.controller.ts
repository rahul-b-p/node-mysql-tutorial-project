import { Request, Response } from "express";
import { UserInsertion } from "../types";
import { User } from "../models";
import { logger } from "../utils/logger";




export const createUser = async (req: Request<{}, any, UserInsertion>, res: Response) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: 'Invalid req body' });
            return;
        }
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            res.status(409).json({ message: "user already exists" });
            return;
        }
        const newUser = await User.create({ username, email, password });

        res.status(201).json({ message: 'new user created successfully', Data: newUser });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Something went wron at server side' });
    }
}