import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("modules")
class Modules {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    modules_name: string;

    constructor() {
        if (!this.id)
            this.id = uuid();
    }
}

export { Modules }