import { GetError } from "../../../domain/errors/GetError";
import { UpdateError } from "../../../domain/errors/UpdateError";
import { IUser } from "../../../domain/interfaces/IUser.interface";
import { IUserService } from "../../../domain/services/IUser.interface";


export class UpdateUserUseCase{
    constructor(private readonly userSrv: IUserService){

    }

    async execute(idUser: string,user: IUser):Promise<IUser>{
        try {
            const userUpdate = await this.userSrv.updateUser(idUser,user);
            console.log("estamos en la funcion del caso de uso")
            return userUpdate;
        } catch (error) {
            throw new UpdateError("Could not update with success");
            
        }
    }
}