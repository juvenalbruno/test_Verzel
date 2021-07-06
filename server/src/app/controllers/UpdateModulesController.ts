import { Request, Response } from "express";
import { UpdateModulesService } from "../services/UpdateModulesService";

class UpdateModuleController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { modules_name } = req.body;

        const updateModulesService = new UpdateModulesService();
        
        const module = await updateModulesService.execute({ id, modules_name });

        return res.json(module);
    }
}

export { UpdateModuleController }