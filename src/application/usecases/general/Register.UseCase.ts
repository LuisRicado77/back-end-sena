import { GetError } from "../../../domain/errors/GetError";
import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { IUser, IUserCreate } from "../../../domain/interfaces/IUser.interface";
import { IUserService } from "../../../domain/services/IUser.interface";



export class RegisterUseCase{

    constructor(private readonly userSrv: IUserService){}

    async execute(user: IUserCreate):Promise<void>{
        try{
            const userExisting = await this.userSrv.findByEmail(user.email);
            if(!userExisting){
                throw new GetError("Could not find the user")
            }
            const newUser = await this.userSrv.registerUser(user)
        }catch{
            throw new NotCreatedError( "Could not create the user")
        }
        
    }
}