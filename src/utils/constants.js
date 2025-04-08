"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//enfoque variable por variable
//enfoque objeto json
//usar clases
class Parameter {
}
exports.Parameter = Parameter;
Parameter.DATABASE_HOST = process.env.DATABASE_HOST || "test";
Parameter.DATABASE_PORT = process.env.DATABASE_PORT || "test";
Parameter.DATABASE_NAME = process.env.DATABASE_NAME || "test";
