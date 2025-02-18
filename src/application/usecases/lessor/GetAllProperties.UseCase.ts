import { GetError } from "../../../domain/errors/GetError";
import { IProperty } from "../../../domain/interfaces/IProperty.interface";

import { IPropertyService } from '../../../domain/services/IProperty.service';
import { PropertyService } from '../../../infrastructue/services/Property.service';


export class GetAllProperties{
    constructor(private readonly PropertySrv: IPropertyService){}

    async execute():Promise<IProperty[]>{
        try {
            
            const properties : IProperty[] = await this.PropertySrv.getAllProperty();
            console.log(properties);
            return properties;

        } catch (error) {
            console.log(error)
            throw new GetError("Could no found it");
            
        }


    }
}