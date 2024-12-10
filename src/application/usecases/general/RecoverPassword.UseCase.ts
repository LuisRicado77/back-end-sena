import { GetError } from "../../../domain/errors/GetError";
import { RecoverPasswordError } from "../../../domain/errors/RecoverPasswordError";
import { IUserService } from "../../../domain/services/IUser.interface";


export class RecoverPasswordUseCase{
    constructor(private readonly userSrv: IUserService){}

    async execute(oldPassword: string, newPassword:string, email: string):Promise<void>{
        try {
            const existingUser = await this.userSrv.findByEmail(email);
            if(!existingUser){throw new GetError("Could not find it")

            }else{
                const  isTheOldPassword = await this.userSrv.verifyPassword(oldPassword, existingUser)
                if(isTheOldPassword == false){throw new Error("The password is not the same")}
                
                else{
                    const recoverPassword = await this.userSrv.changePassword(newPassword)
                }
            }
        } catch (error) {
            throw new RecoverPasswordError("Could not recovery with success")
        }
    }
}