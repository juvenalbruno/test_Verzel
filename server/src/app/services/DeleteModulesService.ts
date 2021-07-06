import { getCustomRepository } from "typeorm"
import { ModulesRepositories } from "../repositories/ModulesRepositories"

interface IModuleRequest {
    id: string;
}

class DeleteModulesService {
    async execute({ id }: IModuleRequest) {
        const modulesRepositories = getCustomRepository(ModulesRepositories);

        if (!id)
            throw new Error("ID incorrect");
        
        const modulesAlreadyExists = await modulesRepositories.findOne({ id });

        if (!modulesAlreadyExists)
            throw new Error("ID incorrect");
        
        const module = modulesRepositories.delete(id);

        return module;
    }
}

export { DeleteModulesService }