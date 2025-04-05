import { IProperty } from '../interfaces/IProperty.interface';
import { IReview, IReviewCreate } from '../interfaces/IReview.interface';
export interface IReviewService{
    createReview:(review: IReviewCreate) =>Promise<IReview>,
    updateReview:(id: IReview['idReview'], review: IReview) => Promise<IReview>,
    deleteReview:(id: IReview['idReview']) => Promise<void>
    getReviewById:(id: IReview['idReview']) =>Promise<IReview>
    getAllReviewsInaProperty:(idProperty: IProperty['idProperty']) => Promise<IReview[]>
}