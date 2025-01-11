
class payment{

    private idPayment: number
    private status: String
    private amount: number
    private date: Date
    private paymentMethod: String

    constructor(idPayment: number, status:String, amount: number, date: Date, paymentMethod: String){
        this.idPayment = idPayment
        this.status = status
        this.amount = amount
        this.date = date
        this.paymentMethod = paymentMethod
    }

}