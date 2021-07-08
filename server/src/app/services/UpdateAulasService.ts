import { getCustomRepository } from "typeorm";
import { AulasRepositories } from "../repositories/AulasRepositories";

interface IAulasRequest {
    id: string;
    aula_name?: string | undefined;
    link_video?: string | undefined;
    Link_img?: string | undefined;
    happen?: string | undefined;
}

class UpdateAulasService{
    async execute({ id, aula_name, link_video, Link_img, happen }: IAulasRequest) {
        const aulaRepositories = getCustomRepository(AulasRepositories);

        if (!id)
            return;
        
        const aulaAlreadyExists = await aulaRepositories.findOne({ id });

        if (!aulaAlreadyExists)
            return;
        
       aulaRepositories.update(id, { aula_name, link_video, Link_img, happen });

        return
    }
}

export { UpdateAulasService }