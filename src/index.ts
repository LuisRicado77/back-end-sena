import express, { Request, Response } from "express";
import { Rol,Payment,Property,Contract,Receipt, Rental,Review,User } from "./infrastructue/database/models";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { PORT } from "./../config"
import { Parameter } from "./utils/constants";

import { initDatabase } from "./infrastructue/database/mongo";
import paymentRoutes from "./infrastructue/payments/payment.routes";
import { cancelPayment } from './infrastructue/payments/payment.controller';
import 'reflect-metadata';
import sequelize from "./infrastructue/database/sequelize";



//servicio de express
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//call modules and add specific routes
//app.use("/house",houseRouter);

//app.use(paymentRoutes);

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ msg:"hello luis" });
});

//mongodb://localhost:27017/
//const url_database = "mongodb://"+Parameter.DATABASE_HOST+ ":"+Parameter.DATABASE_PORT+"/"+Parameter.DATABASE_NAME;

/*
app.listen(3001, async()  =>{
    //console.log(url_database);
    //await initDatabase(url_database);
    await testConnection();
    console.log("Server running at port 3001");
});*/

/*
(async () => {
    try {

      // Inicia el servidor
      app.listen(3001, async () => {
        await sequelize.authenticate()
        .then(() => console.log('Conexión establecida exitosamente.'))
        .catch(err => console.error('Error al conectar a la base de datos:', err));
        await sequelize.sync({ alter: true }); // Cambiar a `force: true` para recrear tablas
        console.log('¡Tablas sincronizadas correctamente!');
        
        console.log('Servidor ejecutándose en http://localhost:3001');
      });
    } catch (error) {
      console.error('Error al iniciar la aplicación:', error);
    }
  })();
*/
const startServer = async () => {
  try {
    // Verifica la conexión a la base de datos
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");

    // Sincroniza las tablas con la base de datos
    await sequelize.sync({ force: true }); // Cambiar a '{ force: true }' para desarrollo
    console.log("¡Tablas sincronizadas correctamente!");

    // Inicia el servidor
    app.listen(3001, () => {
      console.log("Servidor ejecutándose en http://localhost:3801");
    });
  } catch (error) {
    console.error("Error al iniciar la aplicación:", error);
  }
};

startServer();

//app.listen(PORT);
//console.log(`Server on port http://localhost:${PORT}`);
//console.log(`environment: ${process.env.NODE_ENV}`);
