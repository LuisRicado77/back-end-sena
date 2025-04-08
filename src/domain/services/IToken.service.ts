
export interface ITokenService {
    generateToken(payload: object): Promise<string>;
  }