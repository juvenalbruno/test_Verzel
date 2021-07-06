import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Modules } from "./Modules";

@Entity("aulas")
class Aulas{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    aula_name: string;

    @Column()
    link_video: string;

    @Column()
    Link_img: string;
    
    @Column()
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