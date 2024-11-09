import { DeleteError } from "../../../domain/errors/DeleteError";
import { IProperty } from "../../../domain/interfaces/IProperty.interface";
import { IPropertyService } from "../../../domain/services/IProperty.service";


export class DeleteProperty{
    constructor(private readonly propertySrv: IPropertyService){

    }

    async delete(id:string){
         try {
            await this.propertySrv.deleteProperty(id)
         } catch (error) {
            throw error || new DeleteError("Could not Delete")
         }
    }
}