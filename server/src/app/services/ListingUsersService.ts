import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListingUsersService {
    async execute() {
        const userRepositories = getCustomRepository(UsersRepositories);

        const users = await userRepositories.find();

        return users;
    }
}

export { ListingUsersService }