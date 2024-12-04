"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const PetNotFoundError_1 = require("../errors/PetNotFoundError");
const Pet_1 = require("../models/Pet");
const PetService_1 = require("../services/PetService");
let PetController = class PetController {
    constructor(petService) {
        this.petService = petService;
    }
    find() {
        return this.petService.find();
    }
    one(id) {
        return this.petService.findOne(id);
    }
    create(pet) {
        return this.petService.create(pet);
    }
    update(id, pet) {
        return this.petService.update(id, pet);
    }
    delete(id) {
        return this.petService.delete(id);
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PetController.prototype, "find", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/:id'),
    (0, routing_controllers_1.OnUndefined)(PetNotFoundError_1.PetNotFoundError),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PetController.prototype, "one", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)(),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Pet_1.Pet]),
    tslib_1.__metadata("design:returntype", Promise)
], PetController.prototype, "create", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Put)('/:id'),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Pet_1.Pet]),
    tslib_1.__metadata("design:returntype", Promise)
], PetController.prototype, "update", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Delete)('/:id'),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PetController.prototype, "delete", null);
PetController = tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(),
    (0, routing_controllers_1.JsonController)('/pets'),
    tslib_1.__metadata("design:paramtypes", [PetService_1.PetService])
], PetController);
exports.PetController = PetController;
//# sourceMappingURL=PetController.js.map