import { DeleteError } from "../../../domain/errors/DeleteError";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { IProperty } from "../../../domain/interfaces/IProperty.interface";
import { IPropertyService } from "../../../domain/services/IProperty.service";
import { FindPropertyUseCase } from './FindProperty.UseCase';


export class DeletePropertyUseCase{
    constructor(private readonly propertySrv: IPropertyService){
    }
    async execute(id:string):Promise<void>{
         try {
           await this.propertySrv.deleteProperty(id)
         } catch (error) {
            throw error || new DeleteError("Could not Delete")
         }
    }
}