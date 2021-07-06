import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ModulesTable1625578962012 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "modules",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "modules_name",
                    type: "varchar",
                },
                {
                    name: "happen",
                    type: "varchar"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("modules");
    }

}
