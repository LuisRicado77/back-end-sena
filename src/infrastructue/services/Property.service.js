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
exports.PropertyService = void 0;
const DeleteError_1 = require("../../domain/errors/DeleteError");
const GetError_1 = require("../../domain/errors/GetError");
const NotCreatedError_1 = require("../../domain/errors/NotCreatedError");
const UpdateError_1 = require("../../domain/errors/UpdateError");
const property_model_1 = require("../database/models/property.model");
const user_model_1 = require("../database/models/user.model");
class PropertyService {
    getAllPropertiesByLessor(idLessor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const properties = yield property_model_1.PropertyModel.findAll({
                    where: { idLessor: idLessor },
                });
                if (!properties || properties.length === 0) {
                    throw new GetError_1.GetError();
                }
                const formattedProperties = properties.map((property) => {
                    var _a, _b, _c;
                    return {
                        idProperty: property.idProperty.toString(),
                        title: property.title,
                        typeProperty: property.typeProperty,
                        address: property.address,
                        city: property.city,
                        state: property.state,
                        country: property.country,
                        zipCode: property.zipCode,
                        numberRooms: property.numberRooms,
                        numberBathrooms: property.numberBathrooms,
                        squareMeters: (_a = property.squareMeters) === null || _a === void 0 ? void 0 : _a.toString(),
                        rentalPrice: property.rentalPrice,
                        status: property.status,
                        description: property.description,
                        nameLessor: (_b = property.Lessor) === null || _b === void 0 ? void 0 : _b.names,
                        lastNamesLessor: (_c = property.Lessor) === null || _c === void 0 ? void 0 : _c.lastNames,
                        images: property.images,
                        isActive: property.isActive,
                    };
                });
                console.log(formattedProperties);
                return formattedProperties;
            }
            catch (error) {
                console.log(error);
                throw new GetError_1.GetError();
            }
        });
    }
    createProperty(property) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                // console.log(property.city);
                console.log("lo que entras");
                console.log(property.typeProperty);
                console.log(property);
                console.log("se esta ejeucntadon crear en el servicio property");
                const propertyCreated = yield property_model_1.PropertyModel.create(property);
                if (!propertyCreated) {
                    throw new NotCreatedError_1.NotCreatedError("Could not create the property");
                }
                console.log("lo que sube a database");
                console.log(propertyCreated);
                console.log(propertyCreated.typeProperty);
                const newProperty = {
                    idProperty: propertyCreated.idProperty.toString(),
                    title: propertyCreated.title,
                    typeProperty: propertyCreated.typeProperty,
                    address: propertyCreated.address,
                    city: propertyCreated.city,
                    state: propertyCreated.state,
                    country: propertyCreated.country,
                    zipCode: propertyCreated.zipCode,
                    numberRooms: propertyCreated.numberRooms,
                    numberBathrooms: propertyCreated.numberBathrooms,
                    squareMeters: propertyCreated.squareMeters.toString(),
                    rentalPrice: propertyCreated.rentalPrice,
                    status: propertyCreated.status,
                    description: propertyCreated.description,
                    images: propertyCreated.images,
                    nameLessor: (_a = propertyCreated.Lessor) === null || _a === void 0 ? void 0 : _a.names,
                    lastNamesLessor: (_b = propertyCreated.Lessor) === null || _b === void 0 ? void 0 : _b.lastNames,
                    isActive: propertyCreated.isActive,
                };
                console.log(newProperty);
                return newProperty;
            }
            catch (error) {
                console.log(error);
                console.error("Error adding an property:", error); // Log del error real
                throw new NotCreatedError_1.NotCreatedError("Could not create the property:");
            }
        });
    }
    updateProperty(id, property) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                console.log("Ejecutando update en infraestructura");
                // Buscar el usuario por ID
                const propertyExisted = yield property_model_1.PropertyModel.findByPk();
                if (!propertyExisted) {
                    throw new GetError_1.GetError("No se encontró el usuario para actualizar.");
                }
                // Actualizar el usuario
                yield propertyExisted.update(property); // Aquí usamos el método update
                // Crear un objeto IUser con los nuevos datos
                const newProperty = {
                    idProperty: propertyExisted.idProperty.toString(),
                    title: propertyExisted.title,
                    typeProperty: propertyExisted.typeProperty,
                    address: propertyExisted.address,
                    city: propertyExisted.city,
                    state: propertyExisted.state,
                    country: propertyExisted.country,
                    zipCode: propertyExisted.zipCode,
                    numberRooms: propertyExisted.numberRooms,
                    numberBathrooms: propertyExisted.numberBathrooms,
                    squareMeters: propertyExisted.squareMeters.toString(),
                    rentalPrice: propertyExisted.rentalPrice,
                    status: propertyExisted.status,
                    description: propertyExisted.description,
                    images: propertyExisted.images,
                    nameLessor: (_a = propertyExisted.Lessor) === null || _a === void 0 ? void 0 : _a.names,
                    lastNamesLessor: (_b = propertyExisted.Lessor) === null || _b === void 0 ? void 0 : _b.lastNames,
                    isActive: propertyExisted.isActive,
                };
                return newProperty;
            }
            catch (error) {
                console.error("Error al actualizar la propiedad:", error); // Log del error real
                throw new UpdateError_1.UpdateError(`No se pudo actualizar la propiedad: ${error}`);
            }
        });
    }
    getPropertyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                console.log(id);
                const property = yield property_model_1.PropertyModel.findOne({
                    where: { idProperty: id, isActive: 1 },
                    include: [{ model: user_model_1.UserModel, as: "Lessor", attributes: ["names", "lastNames"] }],
                });
                console.log(property);
                if (!property) {
                    throw new GetError_1.GetError("Could no found the user");
                }
                const newProperty = {
                    idProperty: property.idProperty.toString(),
                    title: property.title,
                    typeProperty: property.typeProperty,
                    address: property.address,
                    city: property.city,
                    state: property.state,
                    country: property.country,
                    zipCode: property === null || property === void 0 ? void 0 : property.zipCode,
                    numberRooms: property.numberRooms,
                    numberBathrooms: property.numberBathrooms,
                    squareMeters: (_a = property.squareMeters) === null || _a === void 0 ? void 0 : _a.toString(),
                    rentalPrice: property.rentalPrice,
                    status: property.status,
                    description: property.description,
                    images: property === null || property === void 0 ? void 0 : property.images,
                    isActive: property.isActive,
                    idLessor: property.idLessor,
                    nameLessor: (_b = property.Lessor) === null || _b === void 0 ? void 0 : _b.names,
                    lastNamesLessor: (_c = property.Lessor) === null || _c === void 0 ? void 0 : _c.lastNames,
                };
                console.log(newProperty);
                return newProperty;
            }
            catch (error) {
                console.error(error);
                throw new GetError_1.GetError("Could no found the user");
            }
        });
    }
    getAllProperty() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Buscando usuarios");
                const properties = yield property_model_1.PropertyModel.findAll({
                    where: { isActive: 1 },
                    include: [{ model: user_model_1.UserModel, attributes: ["names", "lastNames"] }],
                });
                if (!properties || properties.length === 0) {
                    console.log("usuarios no encontrados");
                    throw new GetError_1.GetError("Could not find users");
                }
                console.log("Usuarios hallados", properties);
                const formattedProperties = properties.map((property) => {
                    var _a, _b, _c;
                    return ({
                        idProperty: property.idProperty.toString(),
                        title: property.title,
                        typeProperty: property.typeProperty,
                        address: property.address,
                        city: property.city,
                        state: property.state,
                        country: property.country,
                        zipCode: property.zipCode,
                        numberRooms: property.numberRooms,
                        numberBathrooms: property.numberBathrooms,
                        squareMeters: (_a = property.squareMeters) === null || _a === void 0 ? void 0 : _a.toString(),
                        rentalPrice: property.rentalPrice,
                        status: property.status,
                        description: property.description,
                        nameLessor: (_b = property.Lessor) === null || _b === void 0 ? void 0 : _b.names,
                        lastNamesLessor: (_c = property.Lessor) === null || _c === void 0 ? void 0 : _c.lastNames,
                        images: property.images,
                        isActive: property.isActive,
                    });
                });
                console.log(formattedProperties);
                return formattedProperties;
            }
            catch (error) {
                console.log(error);
                throw new Error("Could not find users");
            }
        });
    }
    deleteProperty(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("infraestructura delete  " + id);
                const propertyFound = yield property_model_1.PropertyModel.findOne({
                    where: { idProperty: id, isActive: 1 },
                });
                if (!propertyFound) {
                    throw new DeleteError_1.DeleteError("Could not delete with success");
                }
                const [rowsUpdated] = yield property_model_1.PropertyModel.update({ isActive: 0 }, { where: { idProperty: id } });
                if (rowsUpdated === 0) {
                    throw new DeleteError_1.DeleteError("No se pudo actualizar la propiedad");
                }
                console.log("Deleted with success");
            }
            catch (error) {
                console.error("Error at deleting:", error);
                throw new DeleteError_1.DeleteError("Could not delete with success");
            }
        });
    }
}
exports.PropertyService = PropertyService;
