import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { IReview, IReviewCreate } from "../../../domain/interfaces/IReview.interface";
import { IReviewService } from "../../../domain/services/IReview.service";


export class RatePropertyUseCase{
    constructor(private readonly previewSrv:IReviewService ){}


    async execute(review: IReviewCreate):Promise<IReview>{
        try {
            console.log("se esta   ejecutando el caso de uso")
            const existingreview = await this.previewSrv.createReview(review);
            return existingreview;
              
        } catch (error) {
            throw new NotCreatedError("Could not Create Preview")
        }
        
    }
}