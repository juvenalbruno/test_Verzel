import { Router } from "express";
import { CreateAulaController } from "./app/controllers/CreateAulaController";
import { CreateModuleController } from "./app/controllers/CreateModuleController";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { DeleteAulasController } from "./app/controllers/DeleteAulaController";
import { DeleteModuleController } from "./app/controllers/DeleteModulesController";
import { ListingAulasController } from "./app/controllers/ListingAulasController";
import { ListingModulesController } from "./app/controllers/ListingModulesController";
import { UpdateAulasController } from "./app/controllers/UpdateAulasController";
import { UpdateModuleController } from "./app/controllers/UpdateModulesController";

const router = Router();

const createUserController = new CreateUserController();

const createModuleController = new CreateModuleController();
const listingModulesController = new ListingModulesController();
const updateModulesController = new UpdateModuleController();
const deleteModulesController = new DeleteModuleController();

const createAulaController = new CreateAulaController();
const listingAulasController = new ListingAulasController()
const updateAulasController = new UpdateAulasController();
const deleteAulasController = new DeleteAulasController();


router
    .post("/users", createUserController.handle);

router
    .get("/module", listingModulesController.handle)
    .post("/modules", createModuleController.handle)
    .put("/modules/:id", updateModulesController.handle)
    .delete("/modules/:id", deleteModulesController.handle);
    
router
    .get("/modules/aulas", listingAulasController.handle)
    .post("/modules/aulas", createAulaController.handle)
    .put("/modules/aulas/:id", updateAulasController.handle)
    .delete("/modules/aulas/:id", deleteAulasController.handle);

export { router };