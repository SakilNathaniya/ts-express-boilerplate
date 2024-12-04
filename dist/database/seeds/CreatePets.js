"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePets = void 0;
const tslib_1 = require("tslib");
const typeorm_seeding_1 = require("typeorm-seeding");
const Pet_1 = require("../../../src/api/models/Pet");
const User_1 = require("../../../src/api/models/User");
class CreatePets {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield (0, typeorm_seeding_1.times)(10, (n) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const pet = yield factory(Pet_1.Pet)().seed();
                const user = yield factory(User_1.User)().make();
                user.pets = [pet];
                return yield em.save(user);
            }));
        });
    }
}
exports.CreatePets = CreatePets;
//# sourceMappingURL=CreatePets.js.map