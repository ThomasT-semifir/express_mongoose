import { Router } from "express";
import { userController } from "../controllers/user.controller";

export const router: Router = Router();
const controller = userController;

router.get("", controller.findAll);
router.post("", controller.create);
