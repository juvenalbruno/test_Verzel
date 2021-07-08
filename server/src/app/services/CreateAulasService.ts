import { getCustomRepository } from "typeorm";
import { AulasRepositories } from "../repositories/AulasRepositories";

interface IAulasRequest {
    modules_id: string;
    aula_name: string;
    link_video: string;
    Link_img: string;
    happen: string;
}

class CreateAulasService{
    async execute({ modules_id, aula_name, link_video, Link_img, happen }: IAulasRequest) {
        const aulaRepositories = getCustomRepository(AulasRepositories);

        if (!aula_name)
            throw new Error(" Aula name is incorrect");
        
        const aulaAlreadyExists = await aulaRepositories.findOne({ modules_id, aula_name, link_video, Link_img, happen });

        if (aulaAlreadyExists)
            throw new Error("Aula already exists");
        
        const aula = aulaRepositories.create({ modules_id, aula_name, link_video, Link_img, happen });

        await aulaRepositories.save(aula);

        return aula;
    }
}

export { CreateAulasService }