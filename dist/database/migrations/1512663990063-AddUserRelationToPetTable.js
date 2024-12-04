"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserRelationToPetTable1512663990063 = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddUserRelationToPetTable1512663990063 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_user_pet',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('pet', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('pet', this.tableForeignKey);
        });
    }
}
exports.AddUserRelationToPetTable1512663990063 = AddUserRelationToPetTable1512663990063;
//# sourceMappingURL=1512663990063-AddUserRelationToPetTable.js.map