import { NotRequestFoundError } from "../../../domain/errors/NotRequestFoundError";
import { UpdateError } from "../../../domain/errors/UpdateError";
import { IUser } from "../../../domain/interfaces/IUser.interface";
import { ILeaseRentalApplicationService } from "../../../domain/services/ILeaseRentalApplication.service";


export class RejectOrAcceptRentalApplicationUseCase{
    constructor(private readonly rentalApplicationSrv: ILeaseRentalApplicationService){

    }

    async execute(idRequest: string, accion:'accept'|'reject'):Promise<void>{
        try {
            const request = await this.rentalApplicationSrv.findById(idRequest)

        if(!request){throw new NotRequestFoundError("Not Request Found Error")}

        request.state = accion === 'accept' ? 'Accepted' :'Reject'
        const requestUpdated = await this.rentalApplicationSrv.update(request.id,request);
        } catch (error) {
            throw error || new UpdateError("Could not update with success"); 
        }
    }
}