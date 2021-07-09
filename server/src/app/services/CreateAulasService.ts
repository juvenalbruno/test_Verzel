import { getCustomRepository } from "typeorm";
import { AulasRepositories } from "../repositories/AulasRepositories";

interface IAulasRequest {
    modules_id: string;
    aula_name: string;
    info: string;
    link_video: string;
    Link_img: string;
    happen: string;
}

class CreateAulasService{
    async execute({ modules_id, aula_name, info, link_video, Link_img, happen }: IAulasRequest) {
        const aulaRepositories = getCustomRepository(AulasRepositories);

        if (!aula_name)
            return;
        
        const aulaAlreadyExists = await aulaRepositories.findOne({ modules_id, aula_name, info, link_video, Link_img, happen });

        if (aulaAlreadyExists)
            return;
        
        const aula = aulaRepositories.create({ modules_id, aula_name, info, link_video, Link_img, happen });

        await aulaRepositories.save(aula);

        return aula;
    }
}

export { CreateAulasService }