import { getCustomRepository } from "typeorm"
import { ModulesRepositories } from "../repositories/ModulesRepositories"

interface IModuleRequest {
    id: string;
}

class DeleteModulesService {
    async execute({ id }: IModuleRequest) {
        const modulesRepositories = getCustomRepository(ModulesRepositories);

        if (!id)
            return;
        
        const modulesAlreadyExists = await modulesRepositories.findOne({ id });

        if (!modulesAlreadyExists)
            return;
        
        modulesRepositories.delete(id);

        return
    }
}

export { DeleteModulesService }