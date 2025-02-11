export interface IReview{
    id:number,
    reviewBody: string,
    calification: string,
    dateAndTime: Date,
    nameUser: string,
    namePropertyCheck: string,
    status: string,
    active: boolean

}

export interface IReviewCreate extends Omit<IReview, "id">{
    
}