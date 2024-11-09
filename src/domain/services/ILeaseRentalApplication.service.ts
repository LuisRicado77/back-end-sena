import { ILeaseRentalApplication } from '../interfaces/ILeaseRentalApplication';

export interface ILeaseRentalApplicationService {
    execute(idSolicitud: string, accion: 'accept' | 'reject'): Promise<void>;
    findById(id:ILeaseRentalApplication['id']):Promise<ILeaseRentalApplication>
    update(id:ILeaseRentalApplication['id'],leaseRentalApplication: ILeaseRentalApplication):Promise<void>
    
  }
  