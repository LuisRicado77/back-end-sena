export interface IProperty{
    id:string,
    propertyType: string,
    location:string,
    city:string,
    state: string,
    country:string,
    zipCode:number,
    numberRooms: number,
    numberBathrooms:number,
    squareMeters: number,
    rentalPrice: number,
    propertyStatus: string


}

export interface IpropertyCreate extends Omit<IProperty, "id">{}