import { GetError } from "../../../domain/errors/GetError";
import { IPropertyService } from "../../../domain/services/IProperty.service";


export class FindPropertyUseCase{
    
    constructor(private readonly propertySrv: IPropertyService){

    }

   async execute(id:string){
        try {
            const property = await this.propertySrv.getPropertyById(id)
            return property;
        } catch (error) {
            throw new GetError("No found it");
        }
    }
}