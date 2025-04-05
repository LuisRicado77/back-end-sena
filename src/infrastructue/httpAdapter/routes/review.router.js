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
const shema_middleware_1 = require("../../middlewares/shema.middleware");
const review_schema_1 = require("../../schemas/review.schema");
const responseAdapter_1 = require("../responseAdapter");
const RateProperty_UseCase_1 = require("../../../application/usecases/tenant/RateProperty.UseCase");
const Review_service_1 = require("../../services/Review.service");
const NotFoundError_1 = require("../../../domain/errors/NotFoundError");
const GetError_1 = require("../../../domain/errors/GetError");
const DeleteReviewUseCase_1 = require("../../../application/usecases/tenant/DeleteReviewUseCase");
const UpdateReviewUseCase_1 = require("../../../application/usecases/tenant/UpdateReviewUseCase");
const GetAllReviewsInAProperty_UseCase_1 = require("../../../application/usecases/tenant/GetAllReviewsInAProperty.UseCase");
const NotCreatedError_1 = require("../../../domain/errors/NotCreatedError");
const reviewService = new Review_service_1.ReviewService();
const ratePropertyUseCase = new RateProperty_UseCase_1.RatePropertyUseCase(reviewService);
const deleteReviewUseCase = new DeleteReviewUseCase_1.DeleteReviewUseCase(reviewService);
const updateReviewUseCase = new UpdateReviewUseCase_1.UpdateReviewUseCase(reviewService);
const getAllReviewsUseCase = new GetAllReviewsInAProperty_UseCase_1.GetAllReviewsInAPropertyUseCase(reviewService);
const reviewRouter = (0, express_1.Router)();
reviewRouter.post("/", (0, shema_middleware_1.schemaValidator)(review_schema_1.reviewSchemaCreate), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log("post", body);
        responseAdapter_1.ResponseAdapter.handler(ratePropertyUseCase.execute(body), req, res);
    }
    catch (error) {
        console.log(error);
        throw new NotCreatedError_1.NotCreatedError("Error at creating an review");
    }
}));
//update
reviewRouter.patch("/:id", (0, shema_middleware_1.schemaValidator)(review_schema_1.reviewSchemaUpdate), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("ruta del update running");
        const { id } = req.params;
        const body = req.body;
        responseAdapter_1.ResponseAdapter.handler(updateReviewUseCase.execute(id, body), req, res);
    }
    catch (error) {
        throw new NotFoundError_1.NotFoundError("Could not update the review");
    }
}));
//getAll
reviewRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        responseAdapter_1.ResponseAdapter.handler(getAllReviewsUseCase.execute(id), req, res);
    }
    catch (error) {
        console.log(error);
        throw new GetError_1.GetError("Could not get with success");
    }
}));
//delete
reviewRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    responseAdapter_1.ResponseAdapter.handler(deleteReviewUseCase.execute(id), req, res);
}));
exports.default = reviewRouter;
