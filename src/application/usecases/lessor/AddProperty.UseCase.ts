import { SavedError } from "../../../domain/errors/SavedError";
import { IProperty } from "../../../domain/interfaces/IProperty.interface";
import { IPropertyService } from "../../../domain/services/IProperty.service";


export class AddProperty{
    constructor(private readonly propertySrv: IPropertyService){

    }
    async execute(property: IProperty){
        const propertyExisted = await this.propertySrv.getPropertyById(property.id)
        if(propertyExisted){
            throw new SavedError("Could not Saved")
        }

        const newProperty = await this.propertySrv.createProperty(property)
        return newProperty;

    }
}