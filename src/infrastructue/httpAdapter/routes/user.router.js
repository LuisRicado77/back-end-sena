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
exports.userRouter = void 0;
const express_1 = require("express");
const Register_UseCase_1 = require("../../../application/usecases/general/Register.UseCase");
const Login_UseCase_1 = require("../../../application/usecases/general/Login.UseCase");
const findUser_UseCase_1 = require("../../../application/usecases/general/findUser.UseCase");
const User_service_1 = require("../../services/User.service");
const responseAdapter_1 = require("../responseAdapter");
const NotFoundError_1 = require("../../../domain/errors/NotFoundError");
const updateUser_UseCase_1 = require("../../../application/usecases/general/updateUser.UseCase");
const Token_service_1 = require("../../services/Token.service");
const shema_middleware_1 = require("../../middlewares/shema.middleware");
const user_schema_1 = require("../../schemas/user.schema");
const userService = new User_service_1.UserService();
const jwtTokenService = new Token_service_1.JwtTokenService();
const registerUserUseCase = new Register_UseCase_1.RegisterUseCase(userService);
const findUserUseCase = new findUser_UseCase_1.FindUserUseCase(userService);
const updateUserUseCase = new updateUser_UseCase_1.UpdateUserUseCase(userService);
const loginUseCase = new Login_UseCase_1.LoginUseCase(userService, jwtTokenService);
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
//register an user
userRouter.post("/", (0, shema_middleware_1.schemaValidator)(user_schema_1.userSchemaCreate), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        responseAdapter_1.ResponseAdapter.handler(registerUserUseCase.execute(body), req, res);
        console.log("ejecutado create user post");
    }
    catch (error) {
        console.log(error);
    }
}));
//update an user
userRouter.patch("/:id", (0, shema_middleware_1.schemaValidator)(user_schema_1.userSchemaUpdate), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("ruta del update running");
        const { id } = req.params;
        const body = req.body;
        responseAdapter_1.ResponseAdapter.handler(updateUserUseCase.execute(id, body), req, res);
    }
    catch (error) {
        throw new NotFoundError_1.NotFoundError();
    }
}));
//getUserById
userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        responseAdapter_1.ResponseAdapter.handler(findUserUseCase.execute(id), req, res);
    }
    catch (Error) {
        throw new NotFoundError_1.NotFoundError();
    }
}));
//login
userRouter.post('/login', (0, shema_middleware_1.schemaValidator)(user_schema_1.userSchemaLogin), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        responseAdapter_1.ResponseAdapter.handler(loginUseCase.execute({ email, password }), req, res);
    }
    catch (error) {
        throw new Error("Could not authenticate with success");
    }
}));
