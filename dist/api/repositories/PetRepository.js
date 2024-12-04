"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Pet_1 = require("../models/Pet");
let PetRepository = class PetRepository extends typeorm_1.Repository {
    /**
     * Find by user_id is used for our data-loader to get all needed pets in one query.
     */
    findByUserIds(ids) {
        return this.createQueryBuilder()
            .select()
            .where(`pet.user_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
            .getMany();
    }
};
PetRepository = tslib_1.__decorate([
    (0, typeorm_1.EntityRepository)(Pet_1.Pet)
], PetRepository);
exports.PetRepository = PetRepository;
//# sourceMappingURL=PetRepository.js.map