import { Router } from "express";
import { AuthUserController } from "./app/controllers/AuthUserController";
import { CreateAulaController } from "./app/controllers/CreateAulaController";
import { CreateModuleController } from "./app/controllers/CreateModuleController";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { DeleteAulasController } from "./app/controllers/DeleteAulaController";
import { DeleteModuleController } from "./app/controllers/DeleteModulesController";
import { ListingAulaController } from "./app/controllers/ListingAulaController";
import { ListingAulasController } from "./app/controllers/ListingAulasController";
import { ListModuleAulaController } from "./app/controllers/ListingModuleAulaService";
import { ListingModulesController } from "./app/controllers/ListingModulesController";
import { ListingUsersController } from "./app/controllers/ListingUsersController";
import { UpdateAulasController } from "./app/controllers/UpdateAulasController";
import { UpdateModuleController } from "./app/controllers/UpdateModulesController";

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
const listingAulasController = new ListingAulasController();
const listingAulaController = new ListingAulaController();
const updateAulasController = new UpdateAulasController();
const deleteAulasController = new DeleteAulasController();


router
    .post("/users", createUserController.handle)
    // .get("/users", listingUserController.handle);

router
    .post("/login", authUserController.handle);

router
    .get("/modules", listingModulesController.handle)
    .post("/modules", Auth, createModuleController.handle)
    .put("/modules/:id", Auth, updateModulesController.handle)
    .delete("/modules/:id", Auth, deleteModulesController.handle);
    
router
    .get("/modules/aulas", listingAulasController.handle)
    .get("/modules/aulas/:id", listingModuleAulaController.handle)
    .get("/modules/aula/:id", listingAulaController.handle)
    .post("/modules/aulas", Auth, createAulaController.handle)
    .put("/modules/aulas/:id", Auth, updateAulasController.handle)
    .delete("/modules/aulas/:id", Auth, deleteAulasController.handle);

export { router };