"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iocLoader = void 0;
const class_validator_1 = require("class-validator");
const routing_controllers_1 = require("routing-controllers");
// import { useContainer as typeGraphQLUseContainer } from 'type-graphql';
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const iocLoader = (settings) => {
    /**
     * Setup routing-controllers to use typedi container.
     */
    (0, routing_controllers_1.useContainer)(typedi_1.Container);
    (0, typeorm_1.useContainer)(typedi_1.Container);
    (0, class_validator_1.useContainer)(typedi_1.Container);
    // typeGraphQLUseContainer(Container);
};
exports.iocLoader = iocLoader;
//# sourceMappingURL=iocLoader.js.map