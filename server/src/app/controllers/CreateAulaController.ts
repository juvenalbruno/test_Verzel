import { Request, Response } from "express";
import { CreateAulasService } from "../services/CreateAulasService";

class CreateAulaController {
    async handle(req: Request, res: Response) {
        const { modules_id, aula_name, info, link_video, Link_img, happen } = req.body;

        const createAulasService = new CreateAulasService();

        const aula = await createAulasService.execute({ modules_id, aula_name, info, link_video, Link_img, happen });

        return res.json(aula);
    }
}

export { CreateAulaController }