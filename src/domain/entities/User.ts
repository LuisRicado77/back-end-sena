class User{
    
    private idRol: number
    private names: String
    private lastNames: String
    private password: String
    private email: String
    private phone: String
    private address: String
    private city: String
    private state: String


    constructor(idRol: number,names:String, lastNames: String, password: String, email: String, phone: String, address: String, city: String, state: String){
        this.idRol = idRol
        this.names = names
        this.lastNames = lastNames
        this.password = password
        this.email = email
        this.phone = phone
        this.address = address
        this.city = city
        this.state = state
    }
}