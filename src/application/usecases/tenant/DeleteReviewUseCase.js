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
exports.DeleteReviewUseCase = void 0;
const DeleteError_1 = require("../../../domain/errors/DeleteError");
class DeleteReviewUseCase {
    constructor(reviewSrv) {
        this.reviewSrv = reviewSrv;
    }
    execute(idReview) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.reviewSrv.deleteReview(idReview);
            }
            catch (error) {
                console.log(error);
                throw new DeleteError_1.DeleteError("");
            }
        });
    }
}
exports.DeleteReviewUseCase = DeleteReviewUseCase;
