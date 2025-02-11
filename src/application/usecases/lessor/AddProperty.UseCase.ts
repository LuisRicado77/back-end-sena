import { NotCreatedError } from "../../../domain/errors/NotCreatedError";
import { SavedError } from "../../../domain/errors/SavedError";
import { IProperty, IpropertyCreate } from "../../../domain/interfaces/IProperty.interface";
import { IPropertyService } from "../../../domain/services/IProperty.service";


export class AddPropertyUseCase{
    constructor(private readonly propertySrv: IPropertyService){

    }
    async execute(property: IpropertyCreate){
        try{
            console.log("the use case of property create is ejecuting")
        const newProperty = await this.propertySrv.createProperty(property)
        return newProperty;
        }catch{
            throw new NotCreatedError("Could not create property with success")
        }
    }    
}