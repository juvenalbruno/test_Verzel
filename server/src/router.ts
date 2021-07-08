import { Router } from "express";
import { AuthUserController } from "./app/controllers/AuthUserController";
import { CreateAulaController } from "./app/controllers/CreateAulaController";
import { CreateModuleController } from "./app/controllers/CreateModuleController";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { DeleteAulasController } from "./app/controllers/DeleteAulaController";
import { DeleteModuleController } from "./app/controllers/DeleteModulesController";
import { ListingAulasController } from "./app/controllers/ListingAulasController";
import { ListModuleAulaController } from "./app/controllers/ListingModuleAulaService";
import { ListingModulesController } from "./app/controllers/ListingModulesController";
import { ListingUsersController } from "./app/controllers/ListingUsersController";
import { UpdateAulasController } from "./app/controllers/UpdateAulasController";
import { UpdateModuleController } from "./app/controllers/UpdateModulesController";

import { Admin } from "./middlewares/Admin";
import { Auth } from "./middlewares/Auth";

const router = Router();

const authUserController = new AuthUserController();

const createUserController = new CreateUserController();
const listingUserController = new ListingUsersController();

const createModuleController = new CreateModuleController();
const listingModulesController = new ListingModulesController();
const updateModulesController = new UpdateModuleController();
const deleteModulesController = new DeleteModuleController();

const listingModuleAulaController = new ListModuleAulaController();

const createAulaController = new CreateAulaController();
const listingAulasController = new ListingAulasController()
const updateAulasController = new UpdateAulasController();
const deleteAulasController = new DeleteAulasController();


router
    .post("/users", createUserController.handle)
    .get("/users", listingUserController.handle);

router
    .post("/login", authUserController.handle);

router
    .get("/modules", listingModulesController.handle)
    .get("/modules/aulas/:id", listingModuleAulaController.handle)
    .post("/modules", Auth, Admin, createModuleController.handle)
    .put("/modules/:id", Auth, Admin, updateModulesController.handle)
    .delete("/modules/:id", Auth, Admin, deleteModulesController.handle);
    
router
    .get("/modules/aulas", listingAulasController.handle)
    // .get("/modules/aulas/:id", listingAulasController.handleListUnique)
    .post("/modules/aulas", Auth, Admin, createAulaController.handle)
    .put("/modules/aulas/:id", Auth, Admin, updateAulasController.handle)
    .delete("/modules/aulas/:id", Auth, Admin, deleteAulasController.handle);

export { router };