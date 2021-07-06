import { Router } from "express";
import { AuthUserController } from "./app/controllers/AuthUserController";
import { CreateAulaController } from "./app/controllers/CreateAulaController";
import { CreateModuleController } from "./app/controllers/CreateModuleController";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { DeleteAulasController } from "./app/controllers/DeleteAulaController";
import { DeleteModuleController } from "./app/controllers/DeleteModulesController";
import { ListingAulasController } from "./app/controllers/ListingAulasController";
import { ListingModulesController } from "./app/controllers/ListingModulesController";
import { UpdateAulasController } from "./app/controllers/UpdateAulasController";
import { UpdateModuleController } from "./app/controllers/UpdateModulesController";

import { Admin } from "./middlewares/Admin";
import { Auth } from "./middlewares/Auth";

const router = Router();

const authUserController = new AuthUserController();

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
    .post("/login", authUserController.handle);

router
    .get("/module", listingModulesController.handle)
    .post("/modules", Auth, Admin, createModuleController.handle)
    .put("/modules/:id", Auth, Admin, updateModulesController.handle)
    .delete("/modules/:id", Auth, Admin, deleteModulesController.handle);
    
router
    .get("/modules/aulas", listingAulasController.handle)
    .post("/modules/aulas", Auth, Admin, createAulaController.handle)
    .put("/modules/aulas/:id", Auth, Admin, updateAulasController.handle)
    .delete("/modules/aulas/:id", Auth, Admin, deleteAulasController.handle);

export { router };