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
const favorite_schema_1 = require("../../schemas/favorite.schema");
const Favorite_service_1 = require("../../services/Favorite.service");
const DeleteFavoriteUseCase_1 = require("../../../application/usecases/tenant/DeleteFavoriteUseCase");
const CreateFavorite_UseCase_1 = require("../../../application/usecases/tenant/CreateFavorite.UseCase");
const GetAllFavoritesPropertiesByUser_UseCase_1 = require("../../../application/usecases/tenant/GetAllFavoritesPropertiesByUser.UseCase");
const NotCreatedError_1 = require("../../../domain/errors/NotCreatedError");
const responseAdapter_1 = require("../responseAdapter");
const GetError_1 = require("../../../domain/errors/GetError");
const favoriteService = new Favorite_service_1.FavoriteService();
const deleteFavoriteUseCase = new DeleteFavoriteUseCase_1.DeleteFavoriteUseCase(favoriteService);
const createFavoriteUseCase = new CreateFavorite_UseCase_1.CreateFavoriteUseCase(favoriteService);
const getAllFavoritesPpropertiesByUserUseCase = new GetAllFavoritesPropertiesByUser_UseCase_1.GetAllFavoritesPropertiesByTenant(favoriteService);
const favoriteRouter = (0, express_1.Router)();
//create
favoriteRouter.post("/", (0, shema_middleware_1.schemaValidator)(favorite_schema_1.favoriteSchemaCreate), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        yield responseAdapter_1.ResponseAdapter.handler(createFavoriteUseCase.execute(body), req, res);
    }
    catch (error) {
        throw new NotCreatedError_1.NotCreatedError("Could not create with success");
    }
}));
//delete
favoriteRouter.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        responseAdapter_1.ResponseAdapter.handler(deleteFavoriteUseCase.execute(id), req, res);
    }
    catch (error) {
        throw new GetError_1.GetError("Could not get with success");
    }
});
//find
favoriteRouter.get("/:idUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        responseAdapter_1.ResponseAdapter.handler(getAllFavoritesPpropertiesByUserUseCase.execute(id), req, res);
    }
    catch (error) {
        throw new GetError_1.GetError("Could not get with success");
    }
}));
exports.default = favoriteRouter;
