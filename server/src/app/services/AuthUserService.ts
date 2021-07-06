import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: IAuthRequest) {
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({ email });

        if (!user)
            throw new Error("Email/Password incorrect!");

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch)
            throw new Error("Email/Password incorrect!");
        
        const token = sign(
            { email: user.email },
            "verzel",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )

        return token;
    }
}

export { AuthUserService }