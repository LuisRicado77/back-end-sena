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
exports.LoginUseCase = void 0;
const AuthenticationError_1 = require("../../../domain/errors/AuthenticationError ");
const GetError_1 = require("../../../domain/errors/GetError");
const InvalidCredentialsError_1 = require("../../../domain/errors/InvalidCredentialsError");
class LoginUseCase {
    constructor(userSrv, tokenService) {
        this.userSrv = userSrv;
        this.tokenService = tokenService;
    }
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password, }) {
            try {
                const existingUser = yield this.userSrv.findByEmail(email);
                if (!existingUser) {
                    throw new GetError_1.GetError("Could not find the user");
                }
                console.log(existingUser);
                const isPasswordValid = yield this.userSrv.verifyPassword(password);
                if (!isPasswordValid) {
                    throw new InvalidCredentialsError_1.InvalidCredentialError("Invalid email or password");
                }
                const payload = {
                    idUser: existingUser.idUser,
                    email: existingUser.email,
                    names: existingUser.names,
                };
                const idRol = existingUser.idRol;
                const id = existingUser.idUser;
                const idUser = parseInt(id);
                if (!idRol) {
                    throw new GetError_1.GetError("User role ID (idRol) was not found in the database");
                }
                const token = yield this.tokenService.generateToken(payload);
                console.log(idRol, existingUser.email, isPasswordValid);
                return { token, idRol, idUser };
            }
            catch (error) {
                throw new AuthenticationError_1.AuthenticationError("The password y email are incorrect");
            }
        });
    }
}
exports.LoginUseCase = LoginUseCase;
