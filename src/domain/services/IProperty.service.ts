import { IpropertyCreate, IProperty } from '../interfaces/IProperty.interface';

export interface IPropertyService{
    createProperty:(property: IpropertyCreate) => Promise<IProperty>
    updateProperty:(id: IProperty['id'],property:IProperty) => Promise<IProperty>
    getPropertyById:(id: IProperty['id']) => Promise<IProperty>
    getAllProperty:() => Promise<IProperty[]>
    deleteProperty:(id: IProperty['id']) => Promise<void>
}