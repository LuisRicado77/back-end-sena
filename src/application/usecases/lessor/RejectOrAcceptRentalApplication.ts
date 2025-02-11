import { NotRequestFoundError } from "../../../domain/errors/NotRequestFoundError";
import { UpdateError } from "../../../domain/errors/UpdateError";
import { IUser } from "../../../domain/interfaces/IUser.interface";
import { ILeaseRentalApplicationService } from "../../../domain/services/ILeaseRentalApplication.service";
import { ILeaseRentalApplication } from '../../../domain/interfaces/ILeaseRentalApplication';

export class RejectOrAcceptRentalApplicationUseCase {
  constructor(
    private readonly rentalApplicationSrv: ILeaseRentalApplicationService
    
  ) {}

  async execute(idApplication: string, accion: { status: string } ): Promise<void> {
    try {
  
      const updateRequest = await this.rentalApplicationSrv.resposeRequest(idApplication,accion)
      return updateRequest;
      
    } catch (error) {
      throw error || new UpdateError("Could not update with success");
    }
  }
}
