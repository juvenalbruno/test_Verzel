import { BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Modules } from "./Modules";

@Entity("aulas")
class Aulas{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    @BeforeUpdate()
    aula_name: string;

    @Column()
    @BeforeUpdate()
    info: string;

    @Column()
    @BeforeUpdate()
    link_video: string;

    @Column()
    @BeforeUpdate()
    Link_img: string;
    
    @Column()
    @BeforeUpdate()
    happen: string;
    
    @Column()
    modules_id: string;

    @JoinColumn({ name: "modules_id" })
    @ManyToOne(() => Modules)
    modulesId: Modules;

    constructor() {
        if (!this.id)
            this.id = uuid();
    }
}

export { Aulas }