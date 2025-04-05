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
import reviewRouter from "./infrastructue/httpAdapter/routes/review.router";
import favoriteRouter from "./infrastructue/httpAdapter/routes/favorite.router";
import imageStorageRouter from "./infrastructue/httpAdapter/routes/imageStorage.router";





//servicio de express
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use("/users",userRouter);
app.use("/properties",propertyRouter);
app.use("/applications",applicationRouter);
app.use("/reviews",reviewRouter);
app.use("/favorites",favoriteRouter);
app.use("/upload", imageStorageRouter);





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

