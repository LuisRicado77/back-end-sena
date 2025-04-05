"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseAdapter = void 0;
const NotSendNotificationError_1 = require("./../../domain/errors/NotSendNotificationError");
const NotFoundError_1 = require("./../../domain/errors/NotFoundError");
const NotCreatedError_1 = require("../../domain/errors/NotCreatedError");
class ResponseAdapter {
    static handler(func, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield func; // Esperamos la promesa
                if (!res.headersSent) {
                    res.status(200).send(data); // Enviamos la respuesta exitosa
                }
            }
            catch (error) {
                this.handleError(error, res); // Manejamos el error
            }
        });
    }
    static handleError(error, res) {
        if (!res.headersSent) {
            if (error instanceof NotCreatedError_1.NotCreatedError) {
                console.log("NotCreatedError:", error.message);
                res.status(400).send({ msg: error.message });
            }
            else if (error instanceof NotFoundError_1.NotFoundError) {
                console.log("NotFoundError:", error.message);
                res.status(404).send({ msg: error.message });
            }
            else if (error instanceof NotSendNotificationError_1.NotSendNotificationError) {
                console.log("NotSendNotificationError:", error.message);
                res.status(409).send({ msg: error.message });
            }
            else {
                console.error("Internal server error:", error); // Log del error real
                res.status(500).send({ msg: "Internal server error" });
            }
        }
    }
}
exports.ResponseAdapter = ResponseAdapter;
