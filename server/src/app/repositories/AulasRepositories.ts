import { EntityRepository, Repository } from "typeorm";
import { Aulas } from "../models/Aulas";

@EntityRepository(Aulas)
class AulasRepositories extends Repository<Aulas> { }

export { AulasRepositories }