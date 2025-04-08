class Contract{

    private idContract: number
    private startDate: Date;
    private endDate: Date;
    private typeContract: string;
    private contractAmount: number;
    private status: string;


    constructor(idContract: number,startDate: Date,endDate: Date,typeContract:string, contractAmount: number, status:string ){
        this.idContract = idContract
        this.contractAmount = contractAmount
        this.startDate = startDate
        this.endDate = endDate
        this.typeContract = typeContract
        this.contractAmount = contractAmount
        this.status = status

    }
}