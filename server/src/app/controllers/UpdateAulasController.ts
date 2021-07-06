import { Request, Response } from "express";
import { UpdateAulasService } from "../services/UpdateAulasService";

class UpdateAulasController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { aula_name, link_video, Link_img, happen } = req.body;

        const updateAulasService = new UpdateAulasService();
        
        const module = await updateAulasService.execute({ id, aula_name, link_video, Link_img, happen  });

        return res.json(module);
    }
}

export { UpdateAulasController }