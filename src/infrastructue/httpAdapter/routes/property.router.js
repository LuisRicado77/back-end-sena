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
exports.propertyRouter = void 0;
const express_1 = require("express");
const Property_service_1 = require("../../services/Property.service");
const responseAdapter_1 = require("../responseAdapter");
const NotFoundError_1 = require("../../../domain/errors/NotFoundError");
const Token_service_1 = require("../../services/Token.service");
const shema_middleware_1 = require("../../middlewares/shema.middleware");
const property_schema_1 = require("../../schemas/property.schema");
const AddProperty_UseCase_1 = require("../../../application/usecases/lessor/AddProperty.UseCase");
const UpdateProperty_UseCase_1 = require("../../../application/usecases/lessor/UpdateProperty.UseCase");
const FindProperty_UseCase_1 = require("../../../application/usecases/lessor/FindProperty.UseCase");
const DeleteProperty_UseCase_1 = require("../../../application/usecases/lessor/DeleteProperty.UseCase");
const GetAllProperties_UseCase_1 = require("../../../application/usecases/lessor/GetAllProperties.UseCase");
const GetError_1 = require("../../../domain/errors/GetError");
const GetAllPropertiesByLessor_1 = require("../../../application/usecases/lessor/GetAllPropertiesByLessor");
const propertyService = new Property_service_1.PropertyService();
const jwtTokenService = new Token_service_1.JwtTokenService();
const addPropertyUseCase = new AddProperty_UseCase_1.AddPropertyUseCase(propertyService);
const updatePropertyUseCase = new UpdateProperty_UseCase_1.UpdatePropertyUseCase(propertyService);
const findPropertyUseCase = new FindProperty_UseCase_1.FindPropertyUseCase(propertyService);
const deletePropertyUseCase = new DeleteProperty_UseCase_1.DeletePropertyUseCase(propertyService);
const getAllPropertiesUseCase = new GetAllProperties_UseCase_1.GetAllProperties(propertyService);
const getAllPropertiesByLessor = new GetAllPropertiesByLessor_1.getAllPropertiesCreatedByLessor(propertyService);
const propertyRouter = (0, express_1.Router)();
exports.propertyRouter = propertyRouter;
//register an property
propertyRouter.post("/", (0, shema_middleware_1.schemaValidator)(property_schema_1.propertySchemaCreate), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("ejecutado create property post");
    const body = req.body;
    responseAdapter_1.ResponseAdapter.handler(addPropertyUseCase.execute(body), req, res);
    //console.log("ejecutado create property post");
}));
//update an property
propertyRouter.patch("/:id", (0, shema_middleware_1.schemaValidator)(property_schema_1.propertySchemaUpdate), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("ruta del update running");
        const { id } = req.params;
        const body = req.body;
        responseAdapter_1.ResponseAdapter.handler(updatePropertyUseCase.execute(id, body), req, res);
    }
    catch (error) {
        throw new NotFoundError_1.NotFoundError();
    }
}));
//getByid
propertyRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        responseAdapter_1.ResponseAdapter.handler(findPropertyUseCase.execute(id), req, res);
    }
    catch (Error) {
        throw new NotFoundError_1.NotFoundError();
    }
}));
//getAllProperties
propertyRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        responseAdapter_1.ResponseAdapter.handler(getAllPropertiesUseCase.execute(), req, res);
    }
    catch (error) {
        throw new NotFoundError_1.NotFoundError();
    }
}));
//getAllPropertiesCreatedByLessor
propertyRouter.get("/lessor/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        responseAdapter_1.ResponseAdapter.handler(getAllPropertiesByLessor.execute(id), req, res);
    }
    catch (error) {
        throw new GetError_1.GetError("Could not get with success");
    }
}));
//delete
propertyRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        responseAdapter_1.ResponseAdapter.handler(deletePropertyUseCase.execute(id), req, res);
    }
    catch (error) {
        throw new NotFoundError_1.NotFoundError("Could not delete with success");
    }
}));
