import { getCustomRepository } from "typeorm";
import { AulasRepositories } from "../repositories/AulasRepositories";

interface IAulasRequest {
    id: string;
}

class DeleteAulasService{
    async execute({ id }: IAulasRequest) {
        const aulaRepositories = getCustomRepository(AulasRepositories);

        if (!id)
            return;
        
        const aulaAlreadyExists = await aulaRepositories.findOne({ id });

        if (!aulaAlreadyExists)
            return;
        
       aulaRepositories.delete(id);

        return
    }
}

export { DeleteAulasService }