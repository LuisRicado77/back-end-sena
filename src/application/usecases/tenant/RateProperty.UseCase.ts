import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { IReviewCreate } from "../../../domain/interfaces/IReview.interface";
import { IPreviewService } from "../../../domain/services/IPreview.service";


export class RatePropertyUseCase{
    constructor(private readonly previewSrv:IPreviewService ){}


    async execute(review: IReviewCreate):Promise<void>{
        try {
            const existingreview = await this.previewSrv.createReview(review);
              
        } catch (error) {
            throw new NotCreatedError("Could not Create Preview")
        }
        
    }
}