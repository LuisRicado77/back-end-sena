import express, { Request, Response } from "express";
import { TestModel } from "./infrastructue/database/models/test";
import { sequelize ,connection} from "./infrastructue/database/sequelize";
const app = express();
app.use(express.json());


/*
(async () => {
  try {
    // Verifica la conexión a la base de datos
    await connection();
    console.log("Conexión establecida correctamente and tables.");

    // Inicia el servidor
    app.listen(3001, () => {
      console.log("Servidor ejecutándose en http://localhost:3001");
    });
  } catch (error) {
    console.error("Error al iniciar la aplicación:", error);
  }
})();*/

app.listen(3001, async() =>{
  await connection();
  console.log("Server running at port 3001");
})
