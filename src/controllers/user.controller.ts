import { Request, Response } from "express";
import { UserInsertion, UserUpdation } from "../types";
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

export const readUser = async (req: Request, res: Response) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).json({ message: 'Fetched all users data', data: allUsers })
    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Something went wron at server side' });
    }
}

export const updateUser = async (req: Request<{ id: string }, any, UserUpdation>, res: Response) => {
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
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                res.status(409).json({ message: "user already exists" });
                return;
            }
        }

        const updatedUser = await User.update({ email, password, username }, { where: { id } })
        if (!updatedUser) {
            res.status(404).json({ message: "user not found" });
            return;
        }

        const updatedData = await User.findOne({ where: { id } });
        res.status(200).json({ message: "Updated successfully", data: updatedData });

    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Something went wron at server side' });
    }
}