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
exports.RejectOrAcceptRentalApplicationUseCase = void 0;
const UpdateError_1 = require("../../../domain/errors/UpdateError");
class RejectOrAcceptRentalApplicationUseCase {
    constructor(rentalApplicationSrv) {
        this.rentalApplicationSrv = rentalApplicationSrv;
    }
    execute(idApplication, accion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRequest = yield this.rentalApplicationSrv.resposeRequest(idApplication, accion);
                return updateRequest;
            }
            catch (error) {
                throw error || new UpdateError_1.UpdateError("Could not update with success");
            }
        });
    }
}
exports.RejectOrAcceptRentalApplicationUseCase = RejectOrAcceptRentalApplicationUseCase;
