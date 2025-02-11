import { ILeaseRentalApplication, ILeaseRentalApplicationCreate } from '../interfaces/ILeaseRentalApplication';

export interface ILeaseRentalApplicationService {  


    resposeRequest(idApplication: ILeaseRentalApplication['idApplication'], accion: { status: string }): Promise<void>;
    findById(id:ILeaseRentalApplication['idApplication']):Promise<ILeaseRentalApplication>
    update(id:ILeaseRentalApplication['idApplication'],leaseRentalApplication: ILeaseRentalApplication):Promise<ILeaseRentalApplication>
    sendRequest(leaseRentalApplication: ILeaseRentalApplicationCreate):Promise<ILeaseRentalApplication>;
    getAllApplications():Promise<ILeaseRentalApplication[]>;
    cancelRequest(idApplication: ILeaseRentalApplication['idApplication']):Promise<void>;

    

  }
  