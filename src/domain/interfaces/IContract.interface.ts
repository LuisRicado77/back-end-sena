export interface IContract {
    id: string,
    startDate: Date,
    endDate: Date,
    client: string,
    property: string,
    contractType: string,
    contratAmount: number,
    contractStatus: string, //cancel, living, waiting
    specialConditions: string


}

export interface IcontractCreate extends Omit<IContract, "id">{

}