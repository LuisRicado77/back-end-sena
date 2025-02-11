import { UpdateError } from "../../../domain/errors/UpdateError";
import { IProperty } from "../../../domain/interfaces/IProperty.interface";
import { IPropertyService } from "../../../domain/services/IProperty.service";



export class UpdatePropertyUseCase{
    constructor(private readonly propertySrv: IPropertyService){

    }
    async execute(id:string, property:IProperty): Promise<IProperty>{
        
        try {

           const existingProperty = this.propertySrv.getPropertyById(id);
            
            
        if(!existingProperty){throw new UpdateError("The property wasn't find")};

          const propertyUpdate = await this.propertySrv.updateProperty(id,property);
          return propertyUpdate;

        }catch(error){
            throw error || new UpdateError("Could not update with success"); 
            
        }
        
        
    }
}
