import { IContract, IcontractCreate } from '../interfaces/IContract.interface';

export interface IContractService{
   createContract:(contract: IcontractCreate)=>Promise<IContract>,
   updateContract:(id: IContract['id'], contract: IContract)=>Promise<IContract>,
   getContract:(id: IContract['id']) =>Promise<IContract>,
   cancelContract:(id:IContract['id'])=>Promise<void>
}