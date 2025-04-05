

class Review{
    private idReview: number
    private content: String
    private rating: number
    private date: Date
    private time: Date
    private status: String



    constructor(idReview: number,content: String, rating: number, date: Date, time: Date, status: String){
        this.idReview = idReview
        this.content = content
        this.rating = rating
        this.date = date
        this.time = time
        this.status = status
        
    }
}