import { GetError } from "../../../domain/errors/GetError";
import { IContractService } from "../../../domain/services/IContract.service";


export class FindActivesContracts{
    constructor(
        private readonly contractSrv: IContractService
    ){

    }

    async findActivesContracts(){
        try {
            const contract = await this.contractSrv.getActivesContracts();
            return contract;
        } catch (error) {
            throw error || new GetError("Could not get contracts")
            
        }

    }
}

