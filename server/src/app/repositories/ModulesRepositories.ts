import { EntityRepository, Repository } from "typeorm";
import { Modules } from "../models/Modules";

@EntityRepository(Modules)
class ModulesRepositories extends Repository<Modules>{ }

export { ModulesRepositories }