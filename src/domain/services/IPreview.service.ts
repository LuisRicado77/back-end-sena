import { IReview, IReviewCreate } from '../interfaces/IReview.interface';
export interface IPreviewService{
    createReview:(review: IReviewCreate) =>Promise<IReview>,
    updateReview:(id: IReview['id'], review: IReview) => Promise<IReview>,
    deleteReview:(id: IReview['id']) => Promise<void>
    getReviewById:(id: IReview['id']) =>Promise<IReview>
    getAllReviews:()=> Promise<IReview[]>
}