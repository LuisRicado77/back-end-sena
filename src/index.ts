import express, { Request, Response } from "express";
import { userRouter } from "./infrastructue/httpAdapter/routes/user.router";
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
import { propertyRouter } from "./infrastructue/httpAdapter/routes/property.router";
import applicationRouter from "./infrastructue/httpAdapter/routes/application.router";





//servicio de express
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use("/users",userRouter)
app.use("/properties",propertyRouter)
app.use("/applications",applicationRouter)
//call modules and add specific routes
//app.use("/house",houseRouter);

//app.use(paymentRoutes);


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

const startApp = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');

    // Deshabilitar restricciones de clave foránea
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

    // Sincronizar modelos con la base de datos
    await sequelize.sync({ alter: true }); // Usa `force: true` solo en desarrollo
    console.log('Tablas sincronizadas correctamente.');

    // Habilitar restricciones de clave foránea
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    app.listen(3001, () =>{
      console.log("server running in port 3001")
    })
  } catch (error) {
    console.error('Error al iniciar la aplicación:', error);
  }
};

startApp();

//app.listen(PORT);
//console.log(`Server on port http://localhost:${PORT}`);
//console.log(`environment: ${process.env.NODE_ENV}`);
