import { config } from "dotenv";
config();

// Helper para validar variables de entorno
function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

// Paypal
export const PAYPAL_API_CLIENT = getEnvVariable("PAYPAL_API_CLIENT");
export const PAYPAL_API_SECRET = getEnvVariable("PAYPAL_API_SECRET");
export const PAYPAL_API = getEnvVariable("PAYPAL_API"); // url sandbox or live for your app

// Server
export const PORT = process.env.PORT || 3000;
export const HOST =
  process.env.NODE_ENV === "production"
    ? getEnvVariable("HOST")
    : `http://localhost:${PORT}`;
