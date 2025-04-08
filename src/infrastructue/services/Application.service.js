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
exports.ApplicationService = void 0;
const GetError_1 = require("../../domain/errors/GetError");
const NotCreatedError_1 = require("../../domain/errors/NotCreatedError");
const UpdateError_1 = require("../../domain/errors/UpdateError");
const application_model_1 = require("../database/models/application.model");
const DeleteError_1 = require("../../domain/errors/DeleteError");
class ApplicationService {
    resposeRequest(idSolicitud, accion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //console.log(newStatus)
                const newStatus = accion.status;
                console.log(newStatus);
                const applicationExisted = yield application_model_1.ApplicationModel.findOne({ where: { idApplication: idSolicitud, isActive: 1 } });
                if (!applicationExisted) {
                    console.log("could not found an appliction");
                    throw new GetError_1.GetError("Could not find the application");
                }
                console.log("application found it", applicationExisted.toJSON());
                console.log("📝 actualizando. la solicitud");
                yield applicationExisted.update({ status: newStatus });
                console.log("✅ se actualizo:", applicationExisted);
            }
            catch (error) {
                console.error("🔥 Error en responseRequest:", error);
                throw new UpdateError_1.UpdateError("Could not update with success");
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const applicationFound = yield application_model_1.ApplicationModel.findOne({
                    where: { idApplication: id, isActive: 1 }
                });
                if (!applicationFound) {
                    throw new GetError_1.GetError("Could not found the application");
                }
                const application = {
                    idApplication: applicationFound.idApplication.toString(),
                    idProperty: (_a = applicationFound.idProperty) === null || _a === void 0 ? void 0 : _a.toString(),
                    idTenant: (_b = applicationFound.idTenant) === null || _b === void 0 ? void 0 : _b.toString(),
                    status: applicationFound.status,
                    dateRequest: applicationFound.dateRequest,
                    isActive: applicationFound.isActive
                };
                return application;
            }
            catch (error) {
                console.log(error);
                throw new GetError_1.GetError("Could not found the Application");
            }
        });
    }
    update(id, leaseRentalApplication) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const applicationExisted = yield application_model_1.ApplicationModel.findByPk(id);
                if (!applicationExisted) {
                    throw new Error("Could not update because the application does not exist");
                }
                yield applicationExisted.update(leaseRentalApplication);
                const application = {
                    idApplication: applicationExisted.idApplication.toString(),
                    idProperty: applicationExisted.idProperty.toString(),
                    idTenant: applicationExisted.idTenant.toString(),
                    dateRequest: applicationExisted.dateRequest,
                    status: applicationExisted.status,
                    isActive: applicationExisted.isActive
                };
                return application;
            }
            catch (error) {
                throw new UpdateError_1.UpdateError("Could not update with success");
            }
        });
    }
    sendRequest(leaseRentalApplication) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                console.log("📝 Creando nueva solicitud");
                const newApplication = yield application_model_1.ApplicationModel.create(leaseRentalApplication);
                console.log("✅ Nueva solicitud creada:", newApplication);
                if (!newApplication) {
                    throw new NotCreatedError_1.NotCreatedError("No se pudo crear la solicitud.");
                }
                const applicationFormatted = {
                    idApplication: newApplication.idApplication.toString(),
                    status: newApplication.status,
                    dateRequest: newApplication.dateRequest,
                    idProperty: (_a = newApplication.idProperty) === null || _a === void 0 ? void 0 : _a.toString(),
                    idTenant: (_b = newApplication.idTenant) === null || _b === void 0 ? void 0 : _b.toString(),
                    isActive: newApplication.isActive,
                };
                return applicationFormatted;
            }
            catch (error) {
                console.error("🔥 Error en sendRequest:", error);
                throw new NotCreatedError_1.NotCreatedError("Could not send the Application");
            }
        });
    }
    getAllApplications() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const applications = yield application_model_1.ApplicationModel.findAll({ where: { isActive: 1 } });
                if (!applications || applications.length === 0) {
                    throw new GetError_1.GetError("Could not find users");
                }
                const formattedApplications = applications.map((application) => {
                    var _a, _b;
                    return ({
                        idApplication: application.idApplication.toString(),
                        status: application.status,
                        dateRequest: application.dateRequest,
                        isActive: application.isActive,
                        idProperty: (_a = application.idProperty) === null || _a === void 0 ? void 0 : _a.toString(),
                        idTenant: (_b = application.idTenant) === null || _b === void 0 ? void 0 : _b.toString()
                    });
                });
                return formattedApplications;
            }
            catch (error) {
                console.log(error);
                throw new GetError_1.GetError("Could not get with success");
            }
        });
    }
    cancelRequest(idApplication) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const applicationFound = yield application_model_1.ApplicationModel.findOne({ where: { idApplication: idApplication, isActive: 1 } });
                if (!applicationFound) {
                    throw new Error("");
                }
                const [rowsUpdate] = yield application_model_1.ApplicationModel.update({ isActive: 0 }, { where: { idApplication: idApplication } });
                if (rowsUpdate === 0) {
                    throw new UpdateError_1.UpdateError("Could  not udáte woth success");
                }
            }
            catch (error) {
                console.log(error);
                throw new DeleteError_1.DeleteError("");
            }
        });
    }
}
exports.ApplicationService = ApplicationService;
