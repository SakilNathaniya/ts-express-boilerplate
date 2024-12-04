"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonLoader = void 0;
const winston_1 = require("winston");
const env_1 = require("../env");
const winstonLoader = (settings) => {
    (0, winston_1.configure)({
        transports: [
            new winston_1.transports.Console({
                level: env_1.env.log.level,
                handleExceptions: true,
                format: env_1.env.node !== 'development'
                    ? winston_1.format.combine(winston_1.format.json())
                    : winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
            }),
        ],
    });
};
exports.winstonLoader = winstonLoader;
//# sourceMappingURL=winstonLoader.js.map