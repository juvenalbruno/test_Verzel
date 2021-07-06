import { Request, Response } from "express";
import { ListingModulesService } from "../services/ListingModulesService";

class ListingModulesController {
    async handle(req: Request, res: Response) {
        const listingModulesService = new ListingModulesService();

        const modules = await listingModulesService.execute();

        return res.json(modules);
    }
}

export { ListingModulesController }