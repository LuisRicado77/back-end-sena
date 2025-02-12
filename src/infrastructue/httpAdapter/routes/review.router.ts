import { Router,Response,Request } from "express";
import { schemaValidator } from "../../middlewares/shema.middleware";
import { reviewSchemaCreate, reviewSchemaUpdate } from "../../schemas/review.shema";
import { ResponseAdapter } from "../responseAdapter";
import { RatePropertyUseCase } from "../../../application/usecases/tenant/RateProperty.UseCase";
import { ReviewService } from "../../services/Review.service";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { GetError } from "../../../domain/errors/GetError";
import { DeleteReviewUseCase } from "../../../application/usecases/tenant/DeleteReviewUseCase";
import { UpdateReviewUseCase } from "../../../application/usecases/tenant/UpdateReviewUseCase";
import { GetAllReviewsInAPropertyUseCase } from "../../../application/usecases/tenant/GetAllReviewsInAProperty.UseCase";
import { NotCreatedError } from "../../../domain/errors/NotCreatedError";

const reviewService = new ReviewService();
const ratePropertyUseCase = new RatePropertyUseCase(reviewService);
const deleteReviewUseCase = new DeleteReviewUseCase(reviewService);
const updateReviewUseCase = new UpdateReviewUseCase(reviewService);
const getAllReviewsUseCase = new GetAllReviewsInAPropertyUseCase(reviewService);


const reviewRouter = Router();




reviewRouter.post("/",schemaValidator(reviewSchemaCreate), async (req: Request, res:Response) =>{
    try {
        const body = req.body 
        console.log("post", body)   
        ResponseAdapter.handler(ratePropertyUseCase.execute(body),req,res)
    } catch (error) {
        console.log(error)
        throw new NotCreatedError("Error at creating an review");
    }
})

//update
reviewRouter.patch("/:id",schemaValidator(reviewSchemaUpdate) , async (req: Request, res: Response) =>{
    
    try {
        console.log("ruta del update running")
        const {id} = req.params;
        const body = req.body;
        ResponseAdapter.handler(updateReviewUseCase.execute(id,body), req,res)
    } catch (error) {
        throw new NotFoundError("Could not update the review");
    }
})



//getAll
reviewRouter.get("/:id",async (req:Request,res:Response) =>{
    try {
        const {id} = req.params;
        ResponseAdapter.handler(getAllReviewsUseCase.execute(id),req,res)
        
    } catch (error) {
       console.log(error) 
       throw new GetError("Could not get with success");
       
    }
});

//delete
reviewRouter.delete("/:id",async (req: Request,res:Response)=>{
    const {id} = req.params;
    ResponseAdapter.handler(deleteReviewUseCase.execute(id),req,res)
})

export default reviewRouter;