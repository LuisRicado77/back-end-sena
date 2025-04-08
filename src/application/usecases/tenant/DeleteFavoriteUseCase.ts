import { DeleteError } from "../../../domain/errors/DeleteError";
import { IFavorite } from "../../../domain/interfaces/IFavorite.interface";
import { IFavoriteService } from "../../../domain/services/IFavorite.service";


export class DeleteFavoriteUseCase{
    constructor(private readonly favoriteSrv: IFavoriteService){}


    async execute(idFavorite: IFavorite['idFavorite']):Promise<void>{
        try {
            
            const favoriteDeleted = await this.favoriteSrv.deleteFavorite(idFavorite)
            
            
        } catch (error) {
            console.log(error)
            throw new DeleteError("Could not delete with success");
            
        }
    }
}