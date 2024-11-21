import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { NotSendNotificationError } from "../../../domain/errors/NotSendNotificationError";
import { ILeaseRentalApplicationCreate } from "../../../domain/interfaces/ILeaseRentalApplication";
import { ILeaseRentalApplicationService } from "../../../domain/services/ILeaseRentalApplication.service";



export class RequestRentalApplicationUseCase{
    constructor(private readonly leaseRentalApplicationSrv: ILeaseRentalApplicationService){}

    async execute(leaseRentalApplication: ILeaseRentalApplicationCreate):Promise<void>{
       try {
        const wasSent = await this.leaseRentalApplicationSrv.sendRedquest(leaseRentalApplication);
        if(wasSent === false){
            throw new NotSendNotificationError("Could not send the request")
        }
       } catch (error) {
            throw new NotFoundError("Could not resolve the Error")
       }
    }
}