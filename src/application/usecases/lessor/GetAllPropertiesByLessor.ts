import { GetError } from "../../../domain/errors/GetError";
import { IUser } from "../../../domain/interfaces/IUser.interface";
import { IPropertyService } from "../../../domain/services/IProperty.service";


export class getAllPropertiesCreatedByLessor{
    constructor(private readonly PropertyService: IPropertyService ){}

    async execute(idLessor: IUser['idUser']){
        try{
            const properties = this.PropertyService.getAllPropertiesByLessor(idLessor);
            return properties;
        }catch(error){
            console.error(error);
            throw new GetError();
        }
    }
}