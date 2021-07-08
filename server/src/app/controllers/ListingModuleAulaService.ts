import { Request, Response } from "express";
import { ListingModuleAulaService } from "../services/ListingModuleAulaService";

class ListModuleAulaController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const listModuleAulaService = new ListingModuleAulaService();

        const list = await listModuleAulaService.execute(id);

        return res.json(list);
    }
}

export { ListModuleAulaController }