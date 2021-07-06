import { getCustomRepository } from "typeorm"
import { AulasRepositories } from "../repositories/AulasRepositories"

class ListingAulasService {
    async execute() {
        const aulasReporitories = getCustomRepository(AulasRepositories);

        const aulas = await aulasReporitories.find();

        return aulas;
    }
}

export { ListingAulasService }