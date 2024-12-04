"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerLoader = void 0;
const tslib_1 = require("tslib");
const express_basic_auth_1 = tslib_1.__importDefault(require("express-basic-auth"));
const path = tslib_1.__importStar(require("path"));
const swaggerUi = tslib_1.__importStar(require("swagger-ui-express"));
const env_1 = require("../env");
const swaggerLoader = (settings) => {
    if (settings && env_1.env.swagger.enabled) {
        const expressApp = settings.getData('express_app');
        const swaggerFile = require(path.join(__dirname, '..', env_1.env.swagger.file));
        // Add npm infos to the swagger doc
        swaggerFile.info = {
            title: env_1.env.app.name,
            description: env_1.env.app.description,
            version: env_1.env.app.version,
        };
        swaggerFile.servers = [
            {
                url: `${env_1.env.app.schema}://${env_1.env.app.host}:${env_1.env.app.port}${env_1.env.app.routePrefix}`,
            },
        ];
        expressApp.use(env_1.env.swagger.route, env_1.env.swagger.username ? (0, express_basic_auth_1.default)({
            users: {
                [`${env_1.env.swagger.username}`]: env_1.env.swagger.password,
            },
            challenge: true,
        }) : (req, res, next) => next(), swaggerUi.serve, swaggerUi.setup(swaggerFile));
    }
};
exports.swaggerLoader = swaggerLoader;
//# sourceMappingURL=swaggerLoader.js.map