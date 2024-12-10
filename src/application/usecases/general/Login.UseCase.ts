import { AuthenticationError } from "../../../domain/errors/AuthenticationError ";
import { GetError } from "../../../domain/errors/GetError";
import { IUserService } from "../../../domain/services/IUser.interface";



export class LoginUseCase{
    constructor(private readonly userSrv: IUserService){}


    async execute(password: string, email: string):Promise<void>{

        try {

            const existingUser = await this.userSrv.findByEmail(email);

            if(!existingUser){throw new GetError("Could not find the user")}

            this.userSrv.verifyPassword(password,existingUser);
            
        } catch (error) {
            throw new AuthenticationError("The password y email are incorrect");
        }
    }
}