import { DeleteError } from "../../../domain/errors/DeleteError";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { IProperty } from "../../../domain/interfaces/IProperty.interface";
import { IPropertyService } from "../../../domain/services/IProperty.service";
import { FindProperty } from './FindProperty.UseCase';


export class DeleteProperty{
    constructor(private readonly propertySrv: IPropertyService){

    }

    async execute(id:string):Promise<void>{
         try {
           const property =  await this.propertySrv.getPropertyById(id)
           if(!property){
            throw new NotFoundError("Property no found")
           }

           property.active = false
           await this.propertySrv.updateProperty(property.id,property)
         } catch (error) {
            throw error || new DeleteError("Could not Delete")
         }
    }
}