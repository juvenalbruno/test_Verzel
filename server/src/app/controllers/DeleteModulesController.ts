import { Request, Response } from "express";
import { DeleteModulesService } from "../services/DeleteModulesService";

class DeleteModuleController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteModulesService = new DeleteModulesService();
        
        const module = await deleteModulesService.execute({ id });

        return res.json(module);
    }
}

export { DeleteModuleController }