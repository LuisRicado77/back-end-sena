import { IContract, IcontractCreate } from '../interfaces/IContract.interface';
import { IUser } from '../interfaces/IUser.interface';

export interface IContractService{
   createContract:(contract: IcontractCreate)=>Promise<IContract>,
   updateContract:(id: IContract['id'], contract: IContract)=>Promise<IContract>,
   getContractById:(id: IContract['id']) =>Promise<IContract>,
   getActivesContracts:(idUser: IUser['id']) => Promise<IContract[]>
   cancelContract:(id:IContract['id'])=>Promise<void>
}