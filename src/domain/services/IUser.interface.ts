import { IUser, IUserCreate } from '../interfaces/IUser.interface';

export interface IUserService{
    registerUser:(user: IUserCreate) =>Promise<IUser>
    updateUser:(id: IUser['idUser'],user:Partial<IUser>) => Promise<IUser>
    //loginUser:(password: IUser['password'], email: IUser['email']) => Promise<{token: string}>
    deleteUser:(id: IUser['idUser']) => Promise<void>
    getUserById:(id: IUser['idUser']) => Promise<IUser>
    getAllUsers:() => Promise<IUser[]>
    getAllUsersByRol:(idRol: number) => Promise<IUser[]>
    //generateToken(user: IUser):Promise<string>
    findByEmail(email: IUser['email']):Promise<IUser>;
    verifyPassword(password: string):Promise<boolean>
    changePassword(newPassword:string,user:IUser):Promise<string>
    getIdRol(idUser:IUser['idUser']):Promise<number>
}