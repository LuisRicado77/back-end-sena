import jwt from "jsonwebtoken";
import { ITokenService } from "../../domain/services/IToken.service";

export class JwtTokenService implements ITokenService {

  private readonly secretKey = process.env.JWT_SECRET || "0013";

  async generateToken(payload: object): Promise<string> {
    try {
        return jwt.sign(payload, this.secretKey, { expiresIn: "1h" });
      } catch (error) {
        throw new Error("Failed to generate token");
      }
  }
}
