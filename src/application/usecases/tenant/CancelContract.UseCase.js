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
exports.CancelContractUseCase = void 0;
const GetError_1 = require("../../../domain/errors/GetError");
const NotChangeStateError_1 = require("../../../domain/errors/NotChangeStateError");
class CancelContractUseCase {
    constructor(contractSrv) {
        this.contractSrv = contractSrv;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingcontract = yield this.contractSrv.getContractById(id);
                if (!existingcontract) {
                    throw new GetError_1.GetError("Could not find the contract");
                }
                else {
                    const contract = yield this.contractSrv.cancelContract(id);
                }
            }
            catch (error) {
                throw new NotChangeStateError_1.NotChangeStateError("Could not change the state");
            }
        });
    }
}
exports.CancelContractUseCase = CancelContractUseCase;
