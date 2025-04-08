class Property{
    private idProperty: number
    private typeProperty: String
    private address: String
    private city: String
    private state: String
    private country: String
    private zipCode: number
    private numberRooms: number
    private numberBathrooms: number
    private squareMeters: number
    private rentalPrice: number
    private status: String
    private picture1: String
    private picture2: String
    private picture3: String
    private picture4: String
    private picture5: String

    constructor(idProperty: number,status: String, rentalPrice: number, squareMeters:number, numberBathrooms:number, zipCode:number, numberRooms:number,
        typeProperty:String, address:String, city:String, state:String, country:String, picture1: String, picture2:String,picture3:String,
        picture4:String, picture5:String
     ){
        this.idProperty = idProperty
        this.typeProperty = typeProperty
        this.address = address
        this.city = city
        this.state = state
        this.country = country
        this.zipCode = zipCode
        this.numberBathrooms = numberBathrooms
        this.numberRooms = numberRooms
        this.squareMeters = squareMeters
        this.rentalPrice = rentalPrice
        this.status = status
        this.picture1 = picture1
        this.picture2 = picture2
        this.picture3 = picture3
        this.picture4 = picture4
        this.picture5 = picture5
    }
    
}