import { Router } from "express";
import { CreateAulaController } from "./app/controllers/CreateAulaController";
import { CreateModuleController } from "./app/controllers/CreateModuleController";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { ListingModulesController } from "./app/controllers/ListingModulesController";

const router = Router();

const createUserController = new CreateUserController();
const createModuleController = new CreateModuleController();
const createAulaController = new CreateAulaController();

const listingModulesController = new ListingModulesController();

router
    .post("/users", createUserController.handle)

router
    .get("/module", listingModulesController.handle)
    .post("/modules", createModuleController.handle)
    
router
    .post("/modules/aulas", createAulaController.handle)


export { router };