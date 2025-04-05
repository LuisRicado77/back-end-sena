"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PORT = exports.JWT_SECRET = exports.PAYPAL_API = exports.PAYPAL_API_SECRET = exports.PAYPAL_API_CLIENT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// Helper para validar variables de entorno
function getEnvVariable(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}
// Paypal
exports.PAYPAL_API_CLIENT = getEnvVariable("PAYPAL_API_CLIENT");
exports.PAYPAL_API_SECRET = getEnvVariable("PAYPAL_API_SECRET");
exports.PAYPAL_API = getEnvVariable("PAYPAL_API"); // url sandbox or live for your app
exports.JWT_SECRET = getEnvVariable("JWT_SECRET");
// Server
exports.PORT = process.env.PORT || 3000;
exports.HOST = process.env.NODE_ENV === "production"
    ? getEnvVariable("HOST")
    : `http://localhost:${exports.PORT}`;
