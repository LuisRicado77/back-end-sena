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
exports.ReviewService = void 0;
const DeleteError_1 = require("../../domain/errors/DeleteError");
const GetError_1 = require("../../domain/errors/GetError");
const NotCreatedError_1 = require("../../domain/errors/NotCreatedError");
const UpdateError_1 = require("../../domain/errors/UpdateError");
const property_model_1 = require("../database/models/property.model");
const review_model_1 = require("../database/models/review.model");
const user_model_1 = require("../database/models/user.model");
class ReviewService {
    createReview(review) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                console.log(review.status);
                console.log(review.date);
                console.log("creating a review");
                const reviewCreated = yield review_model_1.ReviewModel.create(review);
                console.log("review posted", reviewCreated);
                if (!reviewCreated) {
                    throw new Error("Error at creating");
                }
                const reviewFormatted = {
                    idReview: reviewCreated.idReview.toString(),
                    content: reviewCreated.content,
                    rating: reviewCreated.rating,
                    date: reviewCreated.date,
                    nameUser: ((_a = reviewCreated.user) === null || _a === void 0 ? void 0 : _a.names) || "user unknown",
                    namePropertyCheck: ((_b = reviewCreated.property) === null || _b === void 0 ? void 0 : _b.title) || "property unknown",
                    status: reviewCreated.status,
                    isActive: reviewCreated.isActive,
                };
                console.log(reviewFormatted);
                return reviewFormatted;
            }
            catch (error) {
                console.log(error);
                throw new NotCreatedError_1.NotCreatedError("Could not create with success");
            }
        });
    }
    updateReview(id, review) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const reviewFound = yield review_model_1.ReviewModel.findByPk(id);
                if (!reviewFound) {
                    throw new GetError_1.GetError("Could not get the review");
                }
                yield reviewFound.update(review);
                const reviewFormatted = {
                    idReview: reviewFound.idReview.toString(),
                    content: reviewFound.content,
                    rating: reviewFound.rating,
                    date: reviewFound.date,
                    nameUser: ((_a = reviewFound.user) === null || _a === void 0 ? void 0 : _a.names) || "user unknown",
                    namePropertyCheck: ((_b = reviewFound.property) === null || _b === void 0 ? void 0 : _b.title) || "property unknown",
                    status: reviewFound.status,
                    isActive: reviewFound.isActive,
                };
                return reviewFormatted;
            }
            catch (error) {
                console.error(error);
                throw new UpdateError_1.UpdateError("Could not update  with success");
            }
        });
    }
    deleteReview(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviewFound = yield review_model_1.ReviewModel.findByPk(id);
                if (!reviewFound) {
                    throw new GetError_1.GetError("Could not get with success");
                }
                const [rowsUpdate] = yield review_model_1.ReviewModel.update({ isActive: 0 }, { where: { idReview: id } });
                if (rowsUpdate === 0) {
                    throw new UpdateError_1.UpdateError("Could  not udáte woth success");
                }
            }
            catch (error) {
                console.log(error);
                throw new DeleteError_1.DeleteError("Could not dellete with success");
            }
        });
    }
    getReviewById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const reviewFound = yield review_model_1.ReviewModel.findByPk(id);
                if (!reviewFound) {
                    throw new GetError_1.GetError("Could not get with success");
                }
                const reviewFormatted = {
                    idReview: reviewFound.idReview.toString(),
                    content: reviewFound.content,
                    rating: reviewFound.rating,
                    date: reviewFound.date,
                    nameUser: ((_a = reviewFound.user) === null || _a === void 0 ? void 0 : _a.names) || "user unknown",
                    namePropertyCheck: ((_b = reviewFound.property) === null || _b === void 0 ? void 0 : _b.title) || "property unknown",
                    status: reviewFound.status,
                    isActive: reviewFound.isActive,
                };
                return reviewFormatted;
            }
            catch (error) {
                console.log(error);
                throw new GetError_1.GetError("Could not get");
            }
        });
    }
    getAllReviewsInaProperty(idProperty) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield review_model_1.ReviewModel.findAll({ where: { isActive: 1, idProperty: idProperty },
                    include: [{ model: user_model_1.UserModel, attributes: ['names'] }, { model: property_model_1.PropertyModel, attributes: ['title'] }] });
                if (!reviews || reviews.length === 0) {
                    throw new GetError_1.GetError("Could not get with success");
                }
                const formattedReviews = reviews.map((review) => {
                    var _a, _b;
                    return ({
                        idReview: review.idReview.toString(),
                        content: review.content,
                        rating: review.rating,
                        date: review.date,
                        nameUser: ((_a = review.user) === null || _a === void 0 ? void 0 : _a.names) || "user unknown",
                        namePropertyCheck: ((_b = review.property) === null || _b === void 0 ? void 0 : _b.title) || "porperty unknown",
                        status: review.status
                    });
                });
                return formattedReviews;
            }
            catch (error) {
                console.log(error);
                throw new GetError_1.GetError("Could not get with succes");
            }
        });
    }
}
exports.ReviewService = ReviewService;
