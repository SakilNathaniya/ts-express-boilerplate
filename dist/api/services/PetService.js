"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const uuid_1 = tslib_1.__importDefault(require("uuid"));
const EventDispatcher_1 = require("../../decorators/EventDispatcher");
const Logger_1 = require("../../decorators/Logger");
const PetRepository_1 = require("../repositories/PetRepository");
const events_1 = require("../subscribers/events");
let PetService = class PetService {
    constructor(petRepository, eventDispatcher, log) {
        this.petRepository = petRepository;
        this.eventDispatcher = eventDispatcher;
        this.log = log;
    }
    find() {
        this.log.info('Find all pets');
        return this.petRepository.find();
    }
    findByUser(user) {
        this.log.info('Find all pets of the user', user.toString());
        return this.petRepository.find({
            where: {
                userId: user.id,
            },
        });
    }
    findOne(id) {
        this.log.info('Find all pets');
        return this.petRepository.findOne({ id });
    }
    create(pet) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create a new pet => ', pet.toString());
            pet.id = uuid_1.default.v1();
            const newPet = yield this.petRepository.save(pet);
            this.eventDispatcher.dispatch(events_1.events.pet.created, newPet);
            return newPet;
        });
    }
    update(id, pet) {
        this.log.info('Update a pet');
        pet.id = id;
        return this.petRepository.save(pet);
    }
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete a pet');
            yield this.petRepository.delete(id);
            return;
        });
    }
};
PetService = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typeorm_typedi_extensions_1.OrmRepository)()),
    tslib_1.__param(1, (0, EventDispatcher_1.EventDispatcher)()),
    tslib_1.__param(2, (0, Logger_1.Logger)(__filename)),
    tslib_1.__metadata("design:paramtypes", [PetRepository_1.PetRepository,
        EventDispatcher_1.EventDispatcherInterface, Object])
], PetService);
exports.PetService = PetService;
//# sourceMappingURL=PetService.js.map