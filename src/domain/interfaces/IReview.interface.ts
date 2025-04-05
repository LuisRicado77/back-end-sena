export interface IReview{
    idReview:string,
    content: string,
    rating: number,
    date: Date,
    nameUser: string,
    namePropertyCheck: string,
    status: string,
    isActive?: number

}

export interface IReviewCreate extends Omit<IReview, "id">{
    
}