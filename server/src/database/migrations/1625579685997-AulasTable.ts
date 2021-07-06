import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AulasTable1625579685997 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "aulas",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "aula_name",
                    type: "varchar",
                },
                {
                    name: "link_video",
                    type: "varchar",
                },
                {
                    name: "Link_img",
                    type: "varchar",
                },
                {
                    name: "modules_id",
                    type: "varchar"
                }  
            ],
            foreignKeys: [
                {
                    name: "FKModules",
                    referencedTableName: "modules",
                    referencedColumnNames: ["id"],
                    columnNames: ["modules_id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("aulas");
    }

}
