import { ILeaseRentalApplicationService } from "../../../domain/services/ILeaseRentalApplication.service";


export class CancelRequestRentalApplicationUseCase{
constructor(private readonly applicationSrv: ILeaseRentalApplicationService){}

async execute(idApplication:string){
    try {
        const applicationCanceled = await this.applicationSrv.cancelRequest(idApplication

        )
    } catch (error) {
        console.log(error)
        throw new Error("");
        
    }
}
}