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
exports.RecoverPasswordUseCase = void 0;
const GetError_1 = require("../../../domain/errors/GetError");
const RecoverPasswordError_1 = require("../../../domain/errors/RecoverPasswordError");
class RecoverPasswordUseCase {
    constructor(userSrv) {
        this.userSrv = userSrv;
    }
    execute(oldPassword, newPassword, email, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingUser = yield this.userSrv.findByEmail(email);
                if (!existingUser) {
                    throw new GetError_1.GetError("Could not find it");
                }
                else {
                    const isTheOldPassword = yield this.userSrv.verifyPassword(oldPassword, existingUser);
                    if (isTheOldPassword == false) {
                        throw new Error("The password is not the same");
                    }
                    else {
                        const recoverPassword = yield this.userSrv.changePassword(newPassword, user);
                    }
                }
            }
            catch (error) {
                throw new RecoverPasswordError_1.RecoverPasswordError("Could not recovery with success");
            }
        });
    }
}
exports.RecoverPasswordUseCase = RecoverPasswordUseCase;
