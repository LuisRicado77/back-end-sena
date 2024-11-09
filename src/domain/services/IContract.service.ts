import { IContract, IcontractCreate } from '../interfaces/IContract.interface';

export interface IContractService{
   createContract:(contract: IcontractCreate)=>Promise<IContract>,
   updateContract:(id: IContract['id'], contract: IContract)=>Promise<IContract>,
   getContractById:(id: IContract['id']) =>Promise<IContract>,
   getActivesContracts:() => Promise<IContract[]>
   cancelContract:(id:IContract['id'])=>Promise<void>
}