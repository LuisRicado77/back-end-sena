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
exports.getAllPropertiesCreatedByLessor = void 0;
const GetError_1 = require("../../../domain/errors/GetError");
class getAllPropertiesCreatedByLessor {
    constructor(PropertyService) {
        this.PropertyService = PropertyService;
    }
    execute(idLessor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const properties = this.PropertyService.getAllPropertiesByLessor(idLessor);
                return properties;
            }
            catch (error) {
                console.error(error);
                throw new GetError_1.GetError();
            }
        });
    }
}
exports.getAllPropertiesCreatedByLessor = getAllPropertiesCreatedByLessor;
