import { IUserService } from "../../../domain/services/IUser.interface";
import { GetError } from "../../../domain/errors/GetError";
import { IUser } from "../../../domain/interfaces/IUser.interface";

export class FindUserUseCase{
    constructor(private readonly userSrv: IUserService){}
    async execute(id:string) :Promise<IUser>{
        try {
            const user = await this.userSrv.getUserById(id)
            return user
            
        } catch (error) {
            throw error || new GetError("Could not get the user")
        }

    }
}