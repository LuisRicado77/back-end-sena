import { IFavorite, IFavoriteCreate } from "../interfaces/IFavorite.interface";
import { IUser } from "../interfaces/IUser.interface";


export interface IFavoriteService{
    createFavorite(newFavorite: IFavoriteCreate):Promise<IFavorite>,
    getAllFavoritesPropertiesByTenant(idTenant:IUser['idUser']):Promise<IFavorite[]>
    deleteFavorite(idFavorite: IFavorite["idFavorite"]):Promise<void>
}