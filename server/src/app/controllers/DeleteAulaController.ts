import { Request, Response } from "express";
import { DeleteAulasService } from "../services/DeleteAulasService";

class DeleteAulasController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteAulasService = new DeleteAulasService();
        
        const aula = await deleteAulasService.execute({ id });

        return res.json(aula);
    }
}

export { DeleteAulasController }