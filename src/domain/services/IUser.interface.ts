import { IUser, IUserCreate } from '../interfaces/IUser.interface';

export interface IUserService{
    registerUser:(user: IUserCreate) =>Promise<IUser>
    updateUser:(id: IUser['id'], user: IUser) => Promise<IUser>
    loginUser:(password: IUser['password'], email: IUser['email']) => Promise<String>
    deleteUser:(id: IUser['id']) => Promise<void>
    getUserById:(id: IUser['id']) => Promise<IUser>
    getAllUsers:() => Promise<IUser[]>
    getAllUsersByRol:(rol: IUser['rol']) => Promise<IUser[]>
    findByEmail(email: IUser['email']):Promise<IUser>;
    verifyPassword(password: string, user:IUser):Promise<boolean>
    changePassword(newPassword:string):Promise<string>
}