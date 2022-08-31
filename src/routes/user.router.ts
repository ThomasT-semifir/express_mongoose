import { Router } from "express";
import { userController } from "../controllers/user.controller";

export const router: Router = Router();
const controller = userController;

router.get("", controller.findAll);
router.post("", controller.create);
router.get("/:id", controller.findById)
router.patch("/:id", controller.partialUpdate)
router.put("/:id", controller.replace)
router.delete("/:id", controller.delete)