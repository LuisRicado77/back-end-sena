import { IpropertyCreate, IProperty } from '../interfaces/IProperty.interface';

export interface IPropertyService{
    createProperty:(property: IpropertyCreate) => Promise<IProperty>
    updateProperty:(id: IProperty['idProperty'],property:IProperty) => Promise<IProperty>
    getPropertyById:(id: IProperty['idProperty']) => Promise<IProperty>
    getAllProperty:() => Promise<IProperty[]>
    deleteProperty:(id: IProperty['idProperty']) => Promise<void>
}