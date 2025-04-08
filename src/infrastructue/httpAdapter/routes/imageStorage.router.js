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
const UploadImageUseCase_1 = require("../../../application/usecases/general/UploadImageUseCase");
const LocalImageStorageService_1 = require("../../services/LocalImageStorageService");
const responseAdapter_1 = require("../responseAdapter");
const validateFiles_middleware_1 = require("../../middlewares/validateFiles.middleware");
const imageStorageService = new LocalImageStorageService_1.LocalImageStorageService();
const uploadImagesUseCase = new UploadImageUseCase_1.UploadImagesUseCase(imageStorageService);
const imageStorageRouter = (0, express_1.Router)();
imageStorageRouter.post("/", validateFiles_middleware_1.uploadMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Files received:", req.files);
        console.log("Body received:", req.body);
        if (!req.files || req.files.length === 0) {
            console.log("Error req no tiene informacín");
        }
        const files = req.files;
        responseAdapter_1.ResponseAdapter.handler(uploadImagesUseCase.execute(files), req, res);
    }
    catch (error) {
        console.error("Error in route:", error);
    }
}));
exports.default = imageStorageRouter;
