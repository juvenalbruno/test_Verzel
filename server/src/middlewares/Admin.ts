import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../app/repositories/UsersRepositories";

export async function Admin(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req;

    const userRepositories = getCustomRepository(UsersRepositories);

    const { admin } = await userRepositories.findOne(user_id);

    if (admin)
        return next()

    return res.status(401).json({ error: "Unauthorized" })
}