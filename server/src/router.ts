import { Router } from "express";
import { CreateAulaController } from "./app/controllers/CreateAulaController";
import { CreateModuleController } from "./app/controllers/CreateModuleController";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { DeleteModuleController } from "./app/controllers/DeleteModulesController";
import { ListingModulesController } from "./app/controllers/ListingModulesController";
import { UpdateModuleController } from "./app/controllers/UpdateModulesController";

const router = Router();

const createUserController = new CreateUserController();

const createModuleController = new CreateModuleController();
const listingModulesController = new ListingModulesController();
const updateModulesController = new UpdateModuleController();
const deleteModulesController = new DeleteModuleController();

const createAulaController = new CreateAulaController();


router
    .post("/users", createUserController.handle)

router
    .get("/module", listingModulesController.handle)
    .post("/modules", createModuleController.handle)
    .put("/modules/:id", updateModulesController.handle)
    .delete("/modules/:id", deleteModulesController.handle)
    
router
    .post("/modules/aulas", createAulaController.handle)


export { router };