import { getCustomRepository } from "typeorm";
import { AulasRepositories } from "../repositories/AulasRepositories";

class ListingAulaService {
    async execute(id: string ) {
        const aulasReporitories = getCustomRepository(AulasRepositories);
    
        const aulas = aulasReporitories.find({ id });
    
        return aulas;
    }
}

export { ListingAulaService }