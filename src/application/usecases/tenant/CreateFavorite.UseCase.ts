import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { IFavorite, IFavoriteCreate } from "../../../domain/interfaces/Favorite.interface";
import { IFavoriteService } from "../../../domain/services/IFavorite.service";


export class CreateFavoriteUseCase {
    constructor(private readonly favoriteSrv: IFavoriteService){}

    async execute(favorite: IFavoriteCreate):Promise<IFavorite>{
        try {
            const newFavorite = await this.favoriteSrv.createFavorite(favorite)
            return newFavorite;
        } catch (error) {
            console.log(error)
            throw new NotCreatedError("Could not have a favorite property");
            
        }
    }
}