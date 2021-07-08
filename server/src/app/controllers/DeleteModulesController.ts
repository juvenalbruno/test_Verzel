import { Request, Response } from "express";
import { DeleteModulesService } from "../services/DeleteModulesService";

class DeleteModuleController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteModulesService = new DeleteModulesService();
        
        await deleteModulesService.execute({ id });

        return res.json("Deleted");
    }
}

export { DeleteModuleController }