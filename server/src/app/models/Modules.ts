import { BeforeUpdate, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("modules")
class Modules {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    @BeforeUpdate()
    modules_name: string;

    constructor() {
        if (!this.id)
            this.id = uuid();
    }
}

export { Modules }