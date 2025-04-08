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
const express_1 = require("express");
const Application_service_1 = require("../../services/Application.service");
const SendRequestRentalApplication_UseCase_1 = require("../../../application/usecases/tenant/SendRequestRentalApplication.UseCase");
const RejectOrAcceptRentalApplication_1 = require("../../../application/usecases/lessor/RejectOrAcceptRentalApplication");
const responseAdapter_1 = require("../responseAdapter");
const shema_middleware_1 = require("../../middlewares/shema.middleware");
const application_schema_1 = require("../../schemas/application.schema");
const GetAllApplications_UseCase_1 = require("../../../application/usecases/lessor/GetAllApplications.UseCase");
const GetApplication_UseCase_1 = require("../../../application/usecases/lessor/GetApplication.UseCase");
const GetError_1 = require("../../../domain/errors/GetError");
const NotFoundError_1 = require("../../../domain/errors/NotFoundError");
const applicationRouter = (0, express_1.Router)();
const applicationService = new Application_service_1.ApplicationService();
const requestRentalApplicationUseCase = new SendRequestRentalApplication_UseCase_1.RequestRentalApplicationUseCase(applicationService);
const rejectOrAcceptRentalApplicationUseCase = new RejectOrAcceptRentalApplication_1.RejectOrAcceptRentalApplicationUseCase(applicationService);
const getAllApplicationUseCase = new GetAllApplications_UseCase_1.GetAllApplicationsUseCase(applicationService);
const getApplicationUseCase = new GetApplication_UseCase_1.GetApplicationUseCase(applicationService);
//send
applicationRouter.post("/", (0, shema_middleware_1.schemaValidator)(application_schema_1.applicationSchemaCreate), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("post router");
        const body = req.body;
        responseAdapter_1.ResponseAdapter.handler(requestRentalApplicationUseCase.execute(body), req, res);
    }
    catch (error) {
        console.log(error);
        throw new GetError_1.GetError();
    }
}));
//accept or reject
applicationRouter.patch("/:id", (0, shema_middleware_1.schemaValidator)(application_schema_1.applicationSchemaUpdate), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        responseAdapter_1.ResponseAdapter.handler(rejectOrAcceptRentalApplicationUseCase.execute(id, body), req, res);
    }
    catch (error) {
        console.log(error);
        throw new NotFoundError_1.NotFoundError();
    }
}));
//getApplication
applicationRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        responseAdapter_1.ResponseAdapter.handler(getApplicationUseCase.execute(id), req, res);
    }
    catch (error) {
        console.log(error);
        throw new Error("");
    }
}));
//getAll
applicationRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        responseAdapter_1.ResponseAdapter.handler(getAllApplicationUseCase.execute(), req, res);
    }
    catch (error) {
        console.log(error);
        throw new GetError_1.GetError("");
    }
}));
exports.default = applicationRouter;
