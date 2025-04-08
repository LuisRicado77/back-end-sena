export interface IContract {
    id: string,
    startDate: Date,
    endDate: Date,
    tenantName: string,
    tenantLastName:string,
    propertyTitle: string,
    contractType: string,
    contratAmount: number,
    contractStatus: string, //cancel, living, waiting
    specialConditions: string,
    active: boolean


}

export interface IcontractCreate extends Omit<IContract, "id">{

}