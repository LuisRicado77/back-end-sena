export interface IUser{
    id:       string,
    name:     String,
    lastName: String,
    password: string,
    email:    String,
    phone:    string,
    location: string,
    rol:      string,//lessor, //tenant
    active:    boolean
}

export interface IUserCreate extends Omit<IUser, "id">{
    
}