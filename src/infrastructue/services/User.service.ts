import { GetError } from "../../domain/errors/GetError";
import { NotCreatedError } from "../../domain/errors/NotCreatedError";
import { IUser, IUserCreate } from '../../domain/interfaces/IUser.interface';
import { IUserService } from "../../domain/services/IUser.interface";
import { RolModel } from "../database/models/rol.model";
import { UserModel } from "../database/models/user.model";
import { UpdateError } from "../../domain/errors/UpdateError";
import { AuthenticationError } from "../../domain/errors/AuthenticationError ";
import { DeleteError } from "../../domain/errors/DeleteError";
import { ValidationError } from "../../domain/errors/ValidationError";

export class UserService implements IUserService {
//resgiter an user, working but i haven't tested it with jest
  async registerUser(user: IUserCreate): Promise<IUser> {
    console.log("lo que entra");
    console.log(user.idRol)

    try {
      console.log("register user ejecutando en el servicio de infraestructura");

    let userExisted: IUser | null = null;
    try {
      userExisted = await this.findByEmail(user.email);
    } catch (error) {
      console.warn("⚠️ No se encontró usuario, se procederá a crearlo.");
    }
    
    if (userExisted) {
      throw new GetError("Could not create the user because it already exists");
    }

    const userCreated = await UserModel.create(user);

    if (!userCreated) {
      throw new NotCreatedError("Could not create the user");
    }
    console.log("lo que parece que se guarda")
    console.log(userCreated.idRol);

      const newUser: IUser = {
        idUser: userCreated.idUser.toString(),
        names: userCreated.names,
        lastNames: userCreated.lastNames,
        password: userCreated.password,
        email: userCreated.email,
        phone: userCreated.phone,
        address: userCreated.address,
        city: userCreated.city,
        state: userCreated.state,
        idRol: userCreated.idRol,
        isActive: userCreated.isActive,
      };
      console.log("lo que pienso que s emuestra despues")
      console.log(newUser.idRol);
      return newUser;
    } catch (error) {
      console.error("Error registering user:", error); // Log del error real
      throw new NotCreatedError("Could not create the user:");
    }
  }
  //update user is working
  async updateUser(id: IUser["idUser"], user: Partial<IUser>): Promise<IUser> {
    try {
        console.log("Ejecutando update en infraestructura");

        // Buscar el usuario por ID
        const userExisted = await UserModel.findByPk(id);
        if (!userExisted) {
            throw new GetError("No se encontró el usuario para actualizar.");
        }

        // Actualizar el usuario
        await userExisted.update(user); // Aquí usamos el método update

        // Crear un objeto IUser con los nuevos datos
        const userUpdate: IUser = {
            idUser: userExisted.idUser.toString(),
            names: userExisted.names,
            lastNames: userExisted.lastNames,
            password: userExisted.password,
            email: userExisted.email,
            phone: userExisted.phone,
            address: userExisted.address,
            city: userExisted.city,
            state: userExisted.state,
            idRol: userExisted.idRol,
            isActive: userExisted.isActive,
        };

        return userUpdate;
    } catch (error) {
        console.error("Error al actualizar el usuario:", error); // Log del error real
        throw new UpdateError(`No se pudo actualizar el usuario: ${error}`);
    }
}
  /*async loginUser(
    password: IUser["password"],
    email: IUser["email"]
  ): Promise<{token: string}> {
    try {
      //let access = true;
      const userLoged = await UserModel.findOne({
        where: { password: password, email: email },
      });
      if (!userLoged) {
        //access = false;
        throw new AuthenticationError("The password and email were not found");
      }
      return ;
    } catch (error) {
      throw new AuthenticationError("The password and email were not found");
    }
  }*/
    //getByid is wornig but i need to add something when we do not get and user.
  async getUserById(id: IUser["idUser"]): Promise<IUser> {
    try {
      const userModel = await UserModel.findByPk(id);
      if (!userModel) {
        throw new GetError("Could no found the user");
      }

      const user: IUser = {
        idUser: userModel.idUser.toString(),
        names: userModel.names,
        lastNames: userModel.lastNames,
        password: userModel.password,
        email: userModel.email,
        phone: userModel.phone,
        address: userModel.address,
        city: userModel.city,
        state: userModel.state,
        idRol: userModel.idRol,
        isActive: userModel.isActive,
      };

  
      return user;
    } catch (error) {
      throw new GetError("Could no found the user");
    }
  }
  async deleteUser(id: IUser["idUser"]): Promise<void> {
    try {
      const userFound = await UserModel.findOne({ where: { idUser: id } });
      if (!userFound) {
        throw new GetError("Could no find the user");
      }
      userFound.isActive = 0;
      userFound.save();
    } catch (error) {
      throw new DeleteError("Could not Delete with success");
    }
  }
  async getAllUsers(): Promise<IUser[]> {
    try {
      const users: UserModel[] = await UserModel.findAll();

      if (!users || users.length === 0) {
        throw new GetError("Could not find users");
      }

      const formattedUsers: IUser[] = users.map((user) => ({
        idUser: user.idUser.toString(), // Convierte `idUser` de number a string
        names: user.names,
        lastNames: user.lastNames,
        password: user.password,
        email: user.email,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        idRol: user.idRol,
        isActive: user.isActive,
      }));
      return formattedUsers;
    } catch (error) {
      throw new Error("Could not find users");
    }
  }
  async getAllUsersByRol(idRol: number): Promise<IUser[]> {
    try {
      const users = UserModel.findAll({ where: { idRol: idRol } });
      if (!users) {
        throw new GetError("Could no found nothing");
      }
      const formattedUsers: IUser[] = (await users).map((user) => ({
        idUser: user.idUser.toString(), // Convierte `idUser` de number a string
        names: user.names,
        lastNames: user.lastNames,
        password: user.password,
        email: user.email,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        idRol: user.idRol,
        isActive: user.isActive,
      }));

      return formattedUsers;
    } catch (error) {
      throw new GetError("Could not found nothing");
    }
  }
  async findByEmail(email: IUser["email"]): Promise<IUser> {
    try {
      console.log("findByEmail en ejecucion")
      const userModel = await UserModel.findOne({ where: { email } });
      if (!userModel) {
        throw new GetError("Could no found the user");
      }

      const user: IUser = {
        idUser: userModel.idUser.toString(),
        names: userModel.names,
        lastNames: userModel.lastNames,
        password: userModel.password,
        email: userModel.email,
        phone: userModel.phone,
        address: userModel.address,
        city: userModel.city,
        state: userModel.state,
        idRol: userModel.idRol,
        isActive: userModel.isActive,
      };

      // Retornar el usuario mapeado
      console.log(userModel.email, user.email, "email")
      return user;
    } catch (error) {
      throw new GetError("Could no found the user"+error);
    }
  }
  async verifyPassword(password: string): Promise<boolean> {
    try {
      let isCorrect = false;
      const userVerified = await UserModel.findOne({where:{password: password}})
      if (!userVerified) {
        throw new GetError("The password is incorrect");
      }


      if (userVerified.password === password) {
        isCorrect = true;
      }
      console.log(userVerified.password,password, "contraseña")
      return isCorrect;
    } catch (error) {
      throw new ValidationError("Could not validate with success");
    }
  }
  async changePassword(newPassword: string, user: IUser): Promise<string> {
    try {
      const userFound = await this.getUserById(user.idUser);

      if (!userFound) {
        throw new GetError("Could not found the user");
      }

      const userChanged = await UserModel.update(
        { password: newPassword },
        { where: { idUser: user.idUser } }
      );

      if (!userChanged) {
        throw new UpdateError("Could not change the password");
      }
      return "the new password is changed  " + userChanged;
    } catch (error) {
      throw new Error("Could not change the password");
    }
  }
  async getIdRol(idUser:IUser['idUser']):Promise<number>{
    
    try {
      const userFound = await UserModel.findOne({where:{idUser:idUser}})

      if(!userFound){throw new GetError("User was not found")}

      let idRol = userFound.idRol
      console.log(idRol)
      return idRol;
    
    } catch (error) {
      throw new GetError("user was not found");
      
    }
    
  }
}


