import { IUser,IUserCreate } from "../interfaces/IUser.interface";

export interface IUserService{
    registerUser:(user: IUserCreate) =>Promise<IUser>
    updateUser:(id: IUser['id'], user: IUser) => Promise<IUser>
    loginUser:(password: IUser['password'], email: IUser['email']) => Promise<String>
    deleteUser:(id: IUser['id']) => Promise<void>
    getUserById:(id: IUser['id']) => Promise<IUser>
    getAllUsers:() => Promise<IUser[]>
    
}