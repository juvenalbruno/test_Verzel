import { Request, Response } from "express";
import { ListingUsersService } from "../services/ListingUsersService";

class ListingUsersController {
    async handle(req: Request, res: Response) {
        const listingUsersService = new ListingUsersService();

        const users = await listingUsersService.execute();

        return res.json(users);
    }
}

export { ListingUsersController }