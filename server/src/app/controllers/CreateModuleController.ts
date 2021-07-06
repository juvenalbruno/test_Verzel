import { Request, Response } from "express";
import { CreateModuleService } from "../services/CreateModulesService";

class CreateModuleController {
    async handle(req: Request, res: Response) {
        const { modules_name, happen } = req.body;

        const createModuleService = new CreateModuleService();
        
        const module = await createModuleService.execute({ modules_name, happen });

        return res.json(module);
    }
}

export { CreateModuleController }