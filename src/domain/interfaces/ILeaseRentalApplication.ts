import { string } from "joi";

export interface ILeaseRentalApplication {
   idApplication:string,
   status: string,
   dateRequest: Date,
   idProperty: string,
   idTenant:string,
   isActive: number

  }

  export interface ILeaseRentalApplicationCreate extends Omit<ILeaseRentalApplication,"idApplication">{}
