import { AuthenticationError } from "../../../domain/errors/AuthenticationError ";
import { GetError } from "../../../domain/errors/GetError";
import { IUserService } from "../../../domain/services/IUser.interface";
import { InvalidCredentialError } from "../../../domain/errors/InvalidCredentialsError";
import { ITokenService } from "../../../domain/services/IToken.service";

export class LoginUseCase {
  constructor(
    private readonly userSrv: IUserService,
    private readonly tokenService: ITokenService
  ) { }

  async execute({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ token: string; idRol?: number }> {
    try {
      const existingUser = await this.userSrv.findByEmail(email);

      if (!existingUser) {
        throw new GetError("Could not find the user");
      }
      console.log(existingUser);

      const isPasswordValid = await this.userSrv.verifyPassword(password);

      if (!isPasswordValid) {
        throw new InvalidCredentialError("Invalid email or password");
      }
      const payload = {
        idUser: existingUser.idUser,
        email: existingUser.email,
        names: existingUser.names,
      };
      const idRol = existingUser.idRol;

      if (!idRol) {
        throw new GetError(
          "User role ID (idRol) was not found in the database"
        );
      }

      const token = await this.tokenService.generateToken(payload);
      console.log(idRol, existingUser.email, isPasswordValid);

      return { token, idRol };
    } catch (error) {
      throw new AuthenticationError("The password y email are incorrect");
    }
  }
}
