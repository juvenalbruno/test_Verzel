import { getCustomRepository } from "typeorm"
import { ModulesRepositories } from "../repositories/ModulesRepositories"

class ListingModulesService {
    async execute() {
        const moduleReporitories = getCustomRepository(ModulesRepositories);

        const modules = await moduleReporitories.find();

        return modules;
    }
}

export { ListingModulesService }