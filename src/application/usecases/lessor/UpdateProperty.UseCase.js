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
exports.UpdatePropertyUseCase = void 0;
const UpdateError_1 = require("../../../domain/errors/UpdateError");
class UpdatePropertyUseCase {
    constructor(propertySrv) {
        this.propertySrv = propertySrv;
    }
    execute(id, property) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingProperty = this.propertySrv.getPropertyById(id);
                if (!existingProperty) {
                    throw new UpdateError_1.UpdateError("The property wasn't find");
                }
                ;
                const propertyUpdate = yield this.propertySrv.updateProperty(id, property);
                return propertyUpdate;
            }
            catch (error) {
                throw error || new UpdateError_1.UpdateError("Could not update with success");
            }
        });
    }
}
exports.UpdatePropertyUseCase = UpdatePropertyUseCase;
