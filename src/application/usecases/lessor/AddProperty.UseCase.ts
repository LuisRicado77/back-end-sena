import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { SavedError } from "../../../domain/errors/SavedError";
import { IProperty } from "../../../domain/interfaces/IProperty.interface";
import { IPropertyService } from "../../../domain/services/IProperty.service";


export class AddPropertyUseCase{
    constructor(private readonly propertySrv: IPropertyService){

    }
    async execute(property: IProperty){
        try{
            const propertyExisted = await this.propertySrv.getPropertyById(property.id)
        if(propertyExisted){
            throw new SavedError("Could not Saved")
        }

        const newProperty = await this.propertySrv.createProperty(property)
        return newProperty;
        }catch{
            throw new NotCreatedError("Could not create property with success")
        }
    }    
}