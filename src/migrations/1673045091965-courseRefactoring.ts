import { MigrationInterface, QueryRunner } from "typeorm";

export class courseRefactoring1673045091965 implements MigrationInterface {
    name = 'courseRefactoring1673045091965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" RENAME COLUMN "name" TO "course"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" RENAME COLUMN "course" TO "name"`);

    }

}
