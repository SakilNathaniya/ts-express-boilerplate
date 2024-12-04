"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePetTable1512663524808 = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreatePetTable1512663524808 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'pet',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        length: '255',
                        isPrimary: true,
                        isNullable: false,
                    }, {
                        name: 'name',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: false,
                    }, {
                        name: 'age',
                        type: 'int',
                        isPrimary: false,
                        isNullable: false,
                    }, {
                        name: 'user_id',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: true,
                    },
                ],
            });
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('pet');
        });
    }
}
exports.CreatePetTable1512663524808 = CreatePetTable1512663524808;
//# sourceMappingURL=1512663524808-CreatePetTable.js.map