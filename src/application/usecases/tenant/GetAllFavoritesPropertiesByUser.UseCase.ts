import { GetError } from "../../../domain/errors/GetError";
import { IFavorite } from "../../../domain/interfaces/IFavorite.interface";
import { IUser } from "../../../domain/interfaces/IUser.interface";
import { IFavoriteService } from "../../../domain/services/IFavorite.service";


export class GetAllFavoritesPropertiesByTenant{
    constructor(private readonly favoritesSrv: IFavoriteService){}

    async execute(idTenant: IUser['idUser']){
        try {
            const favorites : IFavorite[] = await this.favoritesSrv.getAllFavoritesPropertiesByTenant(idTenant)
            return favorites;
        } catch (error) {
            throw new GetError("");
            
        }
    }
}