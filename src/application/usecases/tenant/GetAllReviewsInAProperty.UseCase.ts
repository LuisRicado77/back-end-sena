import { GetError } from "../../../domain/errors/GetError";
import { IProperty } from "../../../domain/interfaces/IProperty.interface";
import { IReview } from "../../../domain/interfaces/IReview.interface";
import { IReviewService } from "../../../domain/services/IReview.service";



export class GetAllReviewsInAPropertyUseCase{
    constructor(private readonly reviewSrv: IReviewService){

    }
    async execute(idProperty:IProperty['idProperty']):Promise<IReview[]>{
        try {
            const reviewByProperty : IReview[] = await this.reviewSrv.getAllReviewsInaProperty(idProperty);
            return reviewByProperty;
            
        } catch (error) {
            console.log(error)
            throw new GetError("Could not get with success");
            
        }
    }
}
