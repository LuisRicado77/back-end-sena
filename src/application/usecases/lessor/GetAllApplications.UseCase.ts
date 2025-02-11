import { GetError } from "../../../domain/errors/GetError";
import { ILeaseRentalApplication, ILeaseRentalApplicationCreate } from "../../../domain/interfaces/ILeaseRentalApplication";
import { ILeaseRentalApplicationService } from "../../../domain/services/ILeaseRentalApplication.service";



export class GetAllApplicationsUseCase{
    constructor(private readonly applicationSrv: ILeaseRentalApplicationService){}

    async execute(){
        try {

            const applications :ILeaseRentalApplication[] = await this.applicationSrv.getAllApplications()
            return applications;
        } catch (error) {
            console.log(error)
            throw new GetError("");
            
        }
    }
}