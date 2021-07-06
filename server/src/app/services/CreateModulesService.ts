import { getCustomRepository } from "typeorm";
import { ModulesRepositories } from "../repositories/ModulesRepositories";

interface IModuleRequest {
    modules_name: string;
}

class CreateModuleService {
    async execute({ modules_name }: IModuleRequest) {
        const moduleRepositories = getCustomRepository(ModulesRepositories);

        if (!modules_name)
            throw new Error("Modules Name incorrect");
        
        const moduleAlreadyExists = await moduleRepositories.findOne({ modules_name });

        if (moduleAlreadyExists)
            throw new Error("Module already exists");
        
        const module = moduleRepositories.create({ modules_name });

        await moduleRepositories.save(module);
        
        return module;
    }
}

export { CreateModuleService }