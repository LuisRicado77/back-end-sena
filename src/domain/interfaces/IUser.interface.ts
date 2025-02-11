export interface IUser {
  idUser: string;
  names: string;
  lastNames: string;
  password: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  idRol: number;
  isActive?: number;
}

export interface IUserCreate extends Omit<IUser, "idUser"> {}
