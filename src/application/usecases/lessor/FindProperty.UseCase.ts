import { GetError } from "../../../domain/errors/GetError";
import { IPropertyService } from "../../../domain/services/IProperty.service";


export class FindPropertyUseCase{
    
    constructor(private readonly propertySrv: IPropertyService){

    }

   async find(id:string){
        try {
            const property = await this.propertySrv.getPropertyById(id)
        } catch (error) {
            throw new GetError("No found it");
        }
    }
}