import { GetError } from "../../../domain/errors/GetError";
import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { IUser, IUserCreate } from "../../../domain/interfaces/IUser.interface";
import { IUserService } from "../../../domain/services/IUser.interface";



export class RegisterUseCase{

    constructor(private readonly userSrv: IUserService){}

    async execute(user: IUserCreate):Promise<IUser>{
        try{
          
            const newUser = await this.userSrv.registerUser(user);
            if(!newUser){
                throw new  NotCreatedError( "Could not create the user")
            }
            return newUser;
        }catch{
            throw new NotCreatedError( "Could not create the user")
        }
        
    }
    
}