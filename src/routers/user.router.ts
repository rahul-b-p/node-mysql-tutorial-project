import { Router } from "express";
import { userController } from "../controllers";

export const router = Router();


router.post('/', userController.createUser);

router.get('/', userController.readUser);