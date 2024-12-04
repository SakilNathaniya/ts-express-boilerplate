"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_seeding_1 = require("typeorm-seeding");
const uuid = tslib_1.__importStar(require("uuid"));
const User_1 = require("../../../src/api/models/User");
(0, typeorm_seeding_1.define)(User_1.User, (faker, settings) => {
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const email = faker.internet.email(firstName, lastName);
    const username = faker.internet.userName(firstName, lastName);
    const user = new User_1.User();
    user.id = uuid.v1();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.username = username;
    user.password = '1234';
    return user;
});
//# sourceMappingURL=UserFactory.js.map