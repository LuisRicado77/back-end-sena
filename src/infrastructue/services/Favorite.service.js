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
exports.FavoriteService = void 0;
const DeleteError_1 = require("../../domain/errors/DeleteError");
const GetError_1 = require("../../domain/errors/GetError");
const NotCreatedError_1 = require("../../domain/errors/NotCreatedError");
const favorites_model_1 = require("../database/models/favorites.model");
const property_model_1 = require("../database/models/property.model");
class FavoriteService {
    deleteFavorite(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const favoriteFound = yield favorites_model_1.FavoritesModel.findByPk(id);
                if (!favoriteFound) {
                    console.log("favorite not found");
                    throw new GetError_1.GetError("");
                }
                const favoriteDeleted = yield favorites_model_1.FavoritesModel.update({ isActive: 0 }, { where: { idFavorite: id } });
                if (!favoriteDeleted) {
                    throw new DeleteError_1.DeleteError("Could not delete with success");
                }
            }
            catch (error) {
                console.log(error);
                throw new DeleteError_1.DeleteError("Could not delete with success");
            }
        });
    }
    createFavorite(newFavorite) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const newItem = yield favorites_model_1.FavoritesModel.create(newFavorite);
                const FavoriteFormatted = {
                    idFavorite: newItem.id.toString(),
                    image: (_a = newItem.property) === null || _a === void 0 ? void 0 : _a.images,
                    titleProperty: (_b = newItem.property) === null || _b === void 0 ? void 0 : _b.title
                };
                return FavoriteFormatted;
            }
            catch (error) {
                console.log(error);
                throw new NotCreatedError_1.NotCreatedError("Could not create with success");
            }
        });
    }
    getAllFavoritesPropertiesByTenant(idTenant) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Obtener las propiedades favoritas del inquilino
                const favorites = yield favorites_model_1.FavoritesModel.findAll({
                    where: { idUser: idTenant }, // Filtra por el ID del inquilino
                    include: [
                        {
                            model: property_model_1.PropertyModel, // Incluye el modelo PropertyModel
                            attributes: ['title', 'images'], // Selecciona los atributos que necesitas
                        },
                    ],
                });
                // Si no hay favoritos, lanza un error
                if (!favorites || favorites.length === 0) {
                    throw new GetError_1.GetError("Could not get favorites with success");
                }
                // Formatea los favoritos según la interfaz IFavorite
                const favoritesFormatted = favorites.map((favorite) => {
                    //   const property = favorite.PropertyModel; // Accede a los datos de PropertyModel
                    var _a, _b;
                    return {
                        idFavorite: favorite.id, // ID del favorito (de la tabla intermedia)
                        image: (_a = favorite.property) === null || _a === void 0 ? void 0 : _a.images, // Imágenes de la propiedad
                        titleProperty: (_b = favorite.property) === null || _b === void 0 ? void 0 : _b.title // Título de la propiedad
                    };
                });
                return favoritesFormatted;
            }
            catch (error) {
                console.error(error);
                throw new GetError_1.GetError("No data found");
            }
        });
    }
}
exports.FavoriteService = FavoriteService;
