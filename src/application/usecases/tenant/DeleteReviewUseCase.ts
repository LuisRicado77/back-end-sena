import { DeleteError } from "../../../domain/errors/DeleteError";
import { IReview } from "../../../domain/interfaces/IReview.interface";
import { IReviewService } from "../../../domain/services/IReview.service";

export class DeleteReviewUseCase{
    constructor(private readonly reviewSrv: IReviewService){}

    async execute(idReview:IReview['idReview']):Promise<void>{
        try {
            await this.reviewSrv.deleteReview(idReview);
            
        } catch (error) {
            console.log(error)
            throw new DeleteError("");
            
        }
    }
}