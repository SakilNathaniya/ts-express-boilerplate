"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_seeding_1 = require("typeorm-seeding");
const uuid = tslib_1.__importStar(require("uuid"));
const Pet_1 = require("../../../src/api/models/Pet");
(0, typeorm_seeding_1.define)(Pet_1.Pet, (faker) => {
    const gender = faker.random.number(1);
    const name = faker.name.firstName(gender);
    const pet = new Pet_1.Pet();
    pet.id = uuid.v1();
    pet.name = name;
    pet.age = faker.random.number();
    return pet;
});
//# sourceMappingURL=PetFactory.js.map