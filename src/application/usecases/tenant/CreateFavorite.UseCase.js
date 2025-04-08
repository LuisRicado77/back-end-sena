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
exports.CreateFavoriteUseCase = void 0;
const NotCreatedError_1 = require("../../../domain/errors/NotCreatedError");
class CreateFavoriteUseCase {
    constructor(favoriteSrv) {
        this.favoriteSrv = favoriteSrv;
    }
    execute(favorite) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newFavorite = yield this.favoriteSrv.createFavorite(favorite);
                return newFavorite;
            }
            catch (error) {
                console.log(error);
                throw new NotCreatedError_1.NotCreatedError("Could not have a favorite property");
            }
        });
    }
}
exports.CreateFavoriteUseCase = CreateFavoriteUseCase;
