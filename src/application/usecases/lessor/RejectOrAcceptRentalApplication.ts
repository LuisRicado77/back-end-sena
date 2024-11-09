import { NotRequestFoundError } from "../../../domain/errors/NotRequestFoundError";
import { IUser } from "../../../domain/interfaces/IUser.interface";
import { ILeaseRentalApplicationService } from "../../../domain/services/ILeaseRentalApplication.service";


export class RejectOrAcceptRentalApplication{
    constructor(private readonly rentalApplicationSrv: ILeaseRentalApplicationService){

    }

    async execute(idRequest: string, accion:'accept'|'reject'):Promise<void>{
        const request = await this.rentalApplicationSrv.findById(idRequest)
        if(!request){throw new NotRequestFoundError("Not Request Found Error")}
    }
}