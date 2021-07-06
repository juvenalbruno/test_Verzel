import { Request, Response, Router } from "express";

const router = Router();

router
    .get("/users", (req: Request, res: Response) => {
        res.json("Conectado!")
    })

export { router };