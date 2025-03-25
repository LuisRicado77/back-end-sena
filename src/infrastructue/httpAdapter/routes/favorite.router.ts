import { Router } from "express";
import { schemaValidator } from "../../middlewares/shema.middleware";
import { favoriteSchemaCreate ,favoriteSchemaUpdate} from "../../schemas/favorite.schema";
import { Response,Request } from "express";
import { FavoriteService } from "../../services/Favorite.service";
import { DeleteFavoriteUseCase } from "../../../application/usecases/tenant/DeleteFavoriteUseCase";
import { CreateFavoriteUseCase } from "../../../application/usecases/tenant/CreateFavorite.UseCase";
import { GetAllFavoritesPropertiesByTenant } from "../../../application/usecases/tenant/GetAllFavoritesPropertiesByUser.UseCase";
import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { ResponseAdapter } from "../responseAdapter";
import { GetError } from "../../../domain/errors/GetError";


const favoriteService = new FavoriteService()
const deleteFavoriteUseCase = new DeleteFavoriteUseCase(favoriteService)
const createFavoriteUseCase = new CreateFavoriteUseCase(favoriteService)
const getAllFavoritesPpropertiesByUserUseCase = new GetAllFavoritesPropertiesByTenant(favoriteService);





const favoriteRouter = Router();

//create
favoriteRouter.post("/",schemaValidator(favoriteSchemaCreate), async (req:Request,res:Response)=>{
    try {
        const body = req.body;
        await ResponseAdapter.handler(createFavoriteUseCase.execute(body),req,res)
    } catch (error) {
        throw new NotCreatedError("Could not create with success");
        
    }
})

//delete
favoriteRouter.delete("/:id",(req:Request,res:Response)=>{
    try {
        const {id} = req.params
        ResponseAdapter.handler(deleteFavoriteUseCase.execute(id),req,res)
    } catch (error) {
        throw new GetError("Could not get with success");
        
    }
})


//find
favoriteRouter.get("/:idUser",async (req:Request,res:Response) =>{
    try {
        const {id} = req.params
        ResponseAdapter.handler(getAllFavoritesPpropertiesByUserUseCase.execute(id),req,res)
    } catch (error) {
        throw new GetError("Could not get with success");
        
    }
})

export default favoriteRouter;