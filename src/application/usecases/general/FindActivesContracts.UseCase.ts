import { GetError } from "../../../domain/errors/GetError";
import { IContractService } from "../../../domain/services/IContract.service";


export class FindActivesContractsUseCase{
    constructor(
        private readonly contractSrv: IContractService
    ){

    }

    async findActivesContracts(id:string){
        try {
            const contract = await this.contractSrv.getActivesContracts(id);
            return contract;
        } catch (error) {
            throw error || new GetError("Could not get contracts")
            
        }

    }
}

