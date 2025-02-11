import { GetError } from "../../../domain/errors/GetError";
import { ILeaseRentalApplicationService } from "../../../domain/services/ILeaseRentalApplication.service"


export class GetApplicationUseCase{
    constructor(private readonly applicationSrv: ILeaseRentalApplicationService){}
        async execute(idApplication:string){
            try {
                const applicationFound = await this.applicationSrv.findById(idApplication);
                return applicationFound
            } catch (error) {
                console.log(error)
                throw new GetError("");
                
            }
        }
    
}