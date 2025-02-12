import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { IReviewCreate } from "../../../domain/interfaces/IReview.interface";
import { IReviewService } from "../../../domain/services/IReview.service";


export class RatePropertyUseCase{
    constructor(private readonly previewSrv:IReviewService ){}


    async execute(review: IReviewCreate):Promise<void>{
        try {
            const existingreview = await this.previewSrv.createReview(review);
            return;
              
        } catch (error) {
            throw new NotCreatedError("Could not Create Preview")
        }
        
    }
}