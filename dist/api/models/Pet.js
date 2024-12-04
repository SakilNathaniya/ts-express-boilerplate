"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Pet = class Pet {
    toString() {
        return `${this.name}`;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Pet.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Pet.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Pet.prototype, "age", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'user_id',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pet.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(type => User_1.User, user => user.pets),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    tslib_1.__metadata("design:type", User_1.User)
], Pet.prototype, "user", void 0);
Pet = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Pet);
exports.Pet = Pet;
//# sourceMappingURL=Pet.js.map