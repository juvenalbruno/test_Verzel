import { Request, Response } from "express";
import { ListingAulaService } from "../services/ListingAulaService";

class ListingAulaController {
    async handle(req: Request, res: Response) {
        const listingAulaService = new ListingAulaService();

        const { id } = req.params;

        const Aula = await listingAulaService.execute(id);

        return res.json(Aula);
    }
}

export { ListingAulaController }