export interface IProperty{
    id:string,
    propertyType: string,
    location:string,
    city:string,
    state: string,
    country:string,
    zipCode:number,
    createdAt?: Date,
    updatedAt?: Date,
    numberRooms: number,
    numberBathrooms:number,
    squareMeters: number,
    rentalPrice: number,
    propertyStatus: string
    description?: string
    images?:string,
    ownerId: string

}

export interface IpropertyCreate extends Omit<IProperty, "id" | "createdAt" | "updateAt">{}