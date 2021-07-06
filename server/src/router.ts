import { Router } from "express";
import { CreateAulaController } from "./app/controllers/CreateAulaController";
import { CreateModuleController } from "./app/controllers/CreateModuleController";
import { CreateUserController } from "./app/controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createModuleController = new CreateModuleController();
const createAulaController = new CreateAulaController();

router.post("/users", createUserController.handle)
router.post("/modules", createModuleController.handle)
router.post("/modules/aulas", createAulaController.handle)

export { router };