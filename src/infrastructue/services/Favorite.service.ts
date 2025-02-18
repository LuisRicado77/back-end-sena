import { GetError } from "../../domain/errors/GetError";
import { NotCreatedError } from "../../domain/errors/NotCreatedError";
import { IFavoriteCreate, IFavorite } from "../../domain/interfaces/Favorite.interface";
import { IUser } from "../../domain/interfaces/IUser.interface";
import { IFavoriteService } from "../../domain/services/IFavorite.service";
import { FavoritesModel } from "../database/models/favorites.model";
import { PropertyModel } from "../database/models/property.model";
import { UserModel } from "../database/models/user.model";


export class FavoriteService implements IFavoriteService{
    async createFavorite(newFavorite: IFavoriteCreate): Promise<IFavorite> {
        try {
            const newItem = await FavoritesModel.create(newFavorite);



            const FavoriteFormatted: IFavorite = {
                idFavorite: newItem.id.toString(),
                image: newItem.property?.images,
                titleProperty: newItem.property?.title
            };
            return FavoriteFormatted;
            
        } catch (error) {
            console.log(error)
            throw new NotCreatedError("Could not create with success");
            
        }

    }
    async getAllFavoritesPropertiesByTenant(idTenant: IUser["idUser"]): Promise<IFavorite[]> {
        try {
            // Obtener las propiedades favoritas del inquilino
            const favorites: FavoritesModel[] = await FavoritesModel.findAll({
                where: { idUser: idTenant }, // Filtra por el ID del inquilino
                include: [
                    {
                        model: PropertyModel, // Incluye el modelo PropertyModel
                        attributes: ['title', 'images'], // Selecciona los atributos que necesitas
                    },
                ],
            });
    
            // Si no hay favoritos, lanza un error
            if (!favorites || favorites.length === 0) {
                throw new GetError("Could not get favorites with success");
            }
    
            // Formatea los favoritos según la interfaz IFavorite
            const favoritesFormatted: IFavorite[] = favorites.map((favorite) => {
             //   const property = favorite.PropertyModel; // Accede a los datos de PropertyModel
    
                return {
                    idFavorite: favorite.id, // ID del favorito (de la tabla intermedia)
                    image: favorite.property?.images, // Imágenes de la propiedad
                    titleProperty: favorite.property?.title // Título de la propiedad
                };
            });
    
            return favoritesFormatted;
        } catch (error) {
            console.error(error);
            throw new GetError("No data found");
        }
    }
    
}