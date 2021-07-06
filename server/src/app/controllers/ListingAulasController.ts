import { Request, Response } from "express";
import { ListingAulasService } from "../services/ListingAulasService";

class ListingAulasController {
    async handle(req: Request, res: Response) {
        const listingAulasService = new ListingAulasService();

        const Aulas = await listingAulasService.execute();

        return res.json(Aulas);
    }
}

export { ListingAulasController }