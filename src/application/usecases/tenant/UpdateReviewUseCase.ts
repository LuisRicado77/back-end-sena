import { UpdateError } from "../../../domain/errors/UpdateError";
import { IReview } from "../../../domain/interfaces/IReview.interface";
import { IReviewService } from "../../../domain/services/IReview.service";

export class UpdateReviewUseCase{
    constructor(private readonly reviewSrv:IReviewService){}

    async execute(idReview: IReview['idReview'],review: IReview):Promise<IReview>{
        try {

            const updateReview = await this.reviewSrv.updateReview(idReview,review)
            return updateReview;
        } catch (error) {

            console.log(error)
            throw new UpdateError("Could not update  with success");
            
        }
    }
}