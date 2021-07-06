import { Request, Response } from "express";
import { CreateAulasService } from "../services/CreateAulasService";

class CreateAulaController {
    async handle(req: Request, res: Response) {
        const { aula_name, link_video, Link_img } = req.body;

        const createAulasService = new CreateAulasService();

        const aula = await createAulasService.execute({ aula_name, link_video, Link_img });

        return res.json(aula);
    }
}

export { CreateAulaController }