import { getCustomRepository } from "typeorm";
import { AulasRepositories } from "../repositories/AulasRepositories";

class ListingModuleAulaService {
    async execute(id: string ) {
        const aulasReporitories = getCustomRepository(AulasRepositories);
    
        const aulas = aulasReporitories.find({ where: { modules_id: id } });
    
        return aulas;
    }
}

export { ListingModuleAulaService }