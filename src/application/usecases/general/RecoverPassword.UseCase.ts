import { GetError } from "../../../domain/errors/GetError";
import { IUserService } from "../../../domain/services/IUser.interface";


export class RecoverPasswordUseCase{
    constructor(private readonly userSrv: IUserService){}

    async execute(pastPassword: string, newPassword:string, email: string):Promise<void>{
        try {
            const existingUser = await this.userSrv.findByEmail(email);
            if(!existingUser){throw new GetError("Could not find it")}
        } catch (error) {
            
        }
    }
}