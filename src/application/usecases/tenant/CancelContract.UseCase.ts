import { GetError } from "../../../domain/errors/GetError";
import { NotChangeStateError } from "../../../domain/errors/NotChangeStateError";
import { IContractService } from "../../../domain/services/IContract.service";


export class CancelContractUseCase {
    constructor(private readonly contractSrv: IContractService) { }


    async execute(id: string): Promise<void> {
        try {
            const existingcontract = await this.contractSrv.getContractById(id);
            if (!existingcontract) { throw new GetError("Could not find the contract") } else {
                const contract = await this.contractSrv.cancelContract(id)
            }

        } catch (error) {
            throw new NotChangeStateError("Could not change the state")
        }

    }
}