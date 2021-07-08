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
            return;
        
        const modulesAlreadyExists = await modulesRepositories.findOne({ id });

        if (!modulesAlreadyExists)
            return;
        
        modulesRepositories.update(id, { modules_name });

        return
    }
}

export { UpdateModulesService }