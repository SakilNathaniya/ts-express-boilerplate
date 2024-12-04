"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMiddleware = void 0;
const tslib_1 = require("tslib");
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const routing_controllers_1 = require("routing-controllers");
let SecurityMiddleware = class SecurityMiddleware {
    use(req, res, next) {
        return (0, helmet_1.default)()(req, res, next);
    }
};
SecurityMiddleware = tslib_1.__decorate([
    (0, routing_controllers_1.Middleware)({ type: 'before' })
], SecurityMiddleware);
exports.SecurityMiddleware = SecurityMiddleware;
//# sourceMappingURL=SecurityMiddleware.js.map