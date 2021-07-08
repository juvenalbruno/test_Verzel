import { getCustomRepository } from "typeorm"
import { ModulesRepositories } from "../repositories/ModulesRepositories"

interface IModuleRequest {
    id: string;
    modules_name: string;
}

class UpdateModulesService {
    async execute({ id, modules_name }: IModuleRequest) {
        const modulesRepositories = getCustomRepository(ModulesRepositories);

        if (!id)
            throw new Error("ID incorrect");
        
        const modulesAlreadyExists = await modulesRepositories.findOne({ id });

        if (!modulesAlreadyExists)
            throw new Error("ID incorrect");
        
        modulesRepositories.update(id, { modules_name });

        return
    }
}

export { UpdateModulesService }