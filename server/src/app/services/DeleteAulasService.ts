import { getCustomRepository } from "typeorm";
import { AulasRepositories } from "../repositories/AulasRepositories";

interface IAulasRequest {
    id: string;
}

class DeleteAulasService{
    async execute({ id }: IAulasRequest) {
        const aulaRepositories = getCustomRepository(AulasRepositories);

        if (!id)
            throw new Error(" Aula name is incorrect");
        
        const aulaAlreadyExists = await aulaRepositories.findOne({ id });

        if (!aulaAlreadyExists)
            throw new Error("Aula not exists");
        
       aulaRepositories.delete(id);

        return
    }
}

export { DeleteAulasService }