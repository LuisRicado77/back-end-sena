export interface IProperty {
  
  idProperty: string;
  title: string,
  typeProperty: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode?: number;
  numberRooms: number;
  numberBathrooms: number;
  squareMeters: string;
  rentalPrice: number;
  status: string;
  description?: string;
  picture1?: string;
  picture2?: string;
  picture3?: string;
  picture4?: string;
  picture5?: string;
  isActive?: number
}

export interface IpropertyCreate
  extends Omit<IProperty, "id"> {}
