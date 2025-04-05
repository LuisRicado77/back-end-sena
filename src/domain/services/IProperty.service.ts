import { IPropertyCreate, IProperty } from '../interfaces/IProperty.interface';
import { IUser } from '../interfaces/IUser.interface';

export interface IPropertyService{
    createProperty:(property: IPropertyCreate) => Promise<IProperty>
    updateProperty:(id: IProperty['idProperty'],property:IProperty) => Promise<IProperty>
    getPropertyById:(id: IProperty['idProperty']) => Promise<IProperty>
    getAllProperty:() => Promise<IProperty[]>
    deleteProperty:(id: IProperty['idProperty']) => Promise<void>
    getAllPropertiesByLessor:(idLessor: IUser['idUser']) => Promise<IProperty[]>
}