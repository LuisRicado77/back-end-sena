
import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { NotSendNotificationError } from "../../../domain/errors/NotSendNotificationError";
import { ILeaseRentalApplication, ILeaseRentalApplicationCreate } from "../../../domain/interfaces/ILeaseRentalApplication";
import { ILeaseRentalApplicationService } from "../../../domain/services/ILeaseRentalApplication.service";



export class RequestRentalApplicationUseCase{
    constructor(private readonly leaseRentalApplicationSrv: ILeaseRentalApplicationService){}

    async execute(leaseRentalApplication: ILeaseRentalApplicationCreate):Promise<ILeaseRentalApplication>{
       try {
        const wasSent = await this.leaseRentalApplicationSrv.sendRequest(leaseRentalApplication);
        return wasSent;
        if(!wasSent){
            throw new NotSendNotificationError("Could not send the request")
        }
        
       } catch (error) {
        console.log(error)
            throw new NotCreatedError("Could not resolve the Error")
       }
    }
}