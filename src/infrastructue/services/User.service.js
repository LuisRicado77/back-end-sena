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
exports.UserService = void 0;
const GetError_1 = require("../../domain/errors/GetError");
const NotCreatedError_1 = require("../../domain/errors/NotCreatedError");
const user_model_1 = require("../database/models/user.model");
const UpdateError_1 = require("../../domain/errors/UpdateError");
const DeleteError_1 = require("../../domain/errors/DeleteError");
const ValidationError_1 = require("../../domain/errors/ValidationError");
class UserService {
    //resgiter an user, working but i haven't tested it with jest
    registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("lo que entra");
            console.log(user.idRol);
            try {
                console.log("register user ejecutando en el servicio de infraestructura");
                let userExisted = null;
                try {
                    userExisted = yield this.findByEmail(user.email);
                }
                catch (error) {
                    console.warn("⚠️ No se encontró usuario, se procederá a crearlo.");
                }
                if (userExisted) {
                    throw new GetError_1.GetError("Could not create the user because it already exists");
                }
                const userCreated = yield user_model_1.UserModel.create(user);
                if (!userCreated) {
                    throw new NotCreatedError_1.NotCreatedError("Could not create the user");
                }
                console.log("lo que parece que se guarda");
                console.log(userCreated.idRol);
                const newUser = {
                    idUser: userCreated.idUser.toString(),
                    names: userCreated.names,
                    lastNames: userCreated.lastNames,
                    password: userCreated.password,
                    email: userCreated.email,
                    phone: userCreated.phone,
                    address: userCreated.address,
                    city: userCreated.city,
                    state: userCreated.state,
                    idRol: userCreated.idRol,
                    isActive: userCreated.isActive,
                };
                console.log("lo que pienso que s emuestra despues");
                console.log(newUser.idRol);
                return newUser;
            }
            catch (error) {
                console.error("Error registering user:", error); // Log del error real
                throw new NotCreatedError_1.NotCreatedError("Could not create the user:");
            }
        });
    }
    //update user is working
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Ejecutando update en infraestructura");
                // Buscar el usuario por ID
                const userExisted = yield user_model_1.UserModel.findByPk(id);
                if (!userExisted) {
                    throw new GetError_1.GetError("No se encontró el usuario para actualizar.");
                }
                // Actualizar el usuario
                yield userExisted.update(user); // Aquí usamos el método update
                // Crear un objeto IUser con los nuevos datos
                const userUpdate = {
                    idUser: userExisted.idUser.toString(),
                    names: userExisted.names,
                    lastNames: userExisted.lastNames,
                    password: userExisted.password,
                    email: userExisted.email,
                    phone: userExisted.phone,
                    address: userExisted.address,
                    city: userExisted.city,
                    state: userExisted.state,
                    idRol: userExisted.idRol,
                    isActive: userExisted.isActive,
                };
                return userUpdate;
            }
            catch (error) {
                console.error("Error al actualizar el usuario:", error); // Log del error real
                throw new UpdateError_1.UpdateError(`No se pudo actualizar el usuario: ${error}`);
            }
        });
    }
    /*async loginUser(
      password: IUser["password"],
      email: IUser["email"]
    ): Promise<{token: string}> {
      try {
        //let access = true;
        const userLoged = await UserModel.findOne({
          where: { password: password, email: email },
        });
        if (!userLoged) {
          //access = false;
          throw new AuthenticationError("The password and email were not found");
        }
        return ;
      } catch (error) {
        throw new AuthenticationError("The password and email were not found");
      }
    }*/
    //getByid is wornig but i need to add something when we do not get and user.
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userModel = yield user_model_1.UserModel.findByPk(id);
                if (!userModel) {
                    throw new GetError_1.GetError("Could no found the user");
                }
                const user = {
                    idUser: userModel.idUser.toString(),
                    names: userModel.names,
                    lastNames: userModel.lastNames,
                    password: userModel.password,
                    email: userModel.email,
                    phone: userModel.phone,
                    address: userModel.address,
                    city: userModel.city,
                    state: userModel.state,
                    idRol: userModel.idRol,
                    isActive: userModel.isActive,
                };
                return user;
            }
            catch (error) {
                throw new GetError_1.GetError("Could no found the user");
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield user_model_1.UserModel.findOne({ where: { idUser: id } });
                if (!userFound) {
                    throw new GetError_1.GetError("Could no find the user");
                }
                userFound.isActive = 0;
                userFound.save();
            }
            catch (error) {
                throw new DeleteError_1.DeleteError("Could not Delete with success");
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_model_1.UserModel.findAll();
                if (!users || users.length === 0) {
                    throw new GetError_1.GetError("Could not find users");
                }
                const formattedUsers = users.map((user) => ({
                    idUser: user.idUser.toString(), // Convierte `idUser` de number a string
                    names: user.names,
                    lastNames: user.lastNames,
                    password: user.password,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    city: user.city,
                    state: user.state,
                    idRol: user.idRol,
                    isActive: user.isActive,
                }));
                return formattedUsers;
            }
            catch (error) {
                throw new Error("Could not find users");
            }
        });
    }
    getAllUsersByRol(idRol) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = user_model_1.UserModel.findAll({ where: { idRol: idRol } });
                if (!users) {
                    throw new GetError_1.GetError("Could no found nothing");
                }
                const formattedUsers = (yield users).map((user) => ({
                    idUser: user.idUser.toString(), // Convierte `idUser` de number a string
                    names: user.names,
                    lastNames: user.lastNames,
                    password: user.password,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    city: user.city,
                    state: user.state,
                    idRol: user.idRol,
                    isActive: user.isActive,
                }));
                return formattedUsers;
            }
            catch (error) {
                throw new GetError_1.GetError("Could not found nothing");
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("findByEmail en ejecucion");
                const userModel = yield user_model_1.UserModel.findOne({ where: { email } });
                if (!userModel) {
                    throw new GetError_1.GetError("Could no found the user");
                }
                const user = {
                    idUser: userModel.idUser.toString(),
                    names: userModel.names,
                    lastNames: userModel.lastNames,
                    password: userModel.password,
                    email: userModel.email,
                    phone: userModel.phone,
                    address: userModel.address,
                    city: userModel.city,
                    state: userModel.state,
                    idRol: userModel.idRol,
                    isActive: userModel.isActive,
                };
                // Retornar el usuario mapeado
                console.log(userModel.email, user.email, "email");
                return user;
            }
            catch (error) {
                throw new GetError_1.GetError("Could no found the user" + error);
            }
        });
    }
    verifyPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let isCorrect = false;
                const userVerified = yield user_model_1.UserModel.findOne({ where: { password: password } });
                if (!userVerified) {
                    throw new GetError_1.GetError("The password is incorrect");
                }
                if (userVerified.password === password) {
                    isCorrect = true;
                }
                console.log(userVerified.password, password, "contraseña");
                return isCorrect;
            }
            catch (error) {
                throw new ValidationError_1.ValidationError("Could not validate with success");
            }
        });
    }
    changePassword(newPassword, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield this.getUserById(user.idUser);
                if (!userFound) {
                    throw new GetError_1.GetError("Could not found the user");
                }
                const userChanged = yield user_model_1.UserModel.update({ password: newPassword }, { where: { idUser: user.idUser } });
                if (!userChanged) {
                    throw new UpdateError_1.UpdateError("Could not change the password");
                }
                return "the new password is changed  " + userChanged;
            }
            catch (error) {
                throw new Error("Could not change the password");
            }
        });
    }
    getIdRol(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield user_model_1.UserModel.findOne({ where: { idUser: idUser } });
                if (!userFound) {
                    throw new GetError_1.GetError("User was not found");
                }
                let idRol = userFound.idRol;
                console.log(idRol);
                return idRol;
            }
            catch (error) {
                throw new GetError_1.GetError("user was not found");
            }
        });
    }
}
exports.UserService = UserService;
