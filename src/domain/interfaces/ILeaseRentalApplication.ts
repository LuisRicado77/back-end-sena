export interface ILeaseRentalApplication {
   id:string,
   idProperty: string,
   idTenant:string,
   state: 'Accepted'|'Reject'|'pending',
   dateRequest: Date,
   active: boolean

  }

  export interface ILeaseRentalApplicationCreate extends Omit<ILeaseRentalApplication,"id">{}
