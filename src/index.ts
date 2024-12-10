import express, { Request, Response } from "express";

import morgan from "morgan";
import cors from "cors";
import path from "path";
import { PORT } from "./../config"
import { Parameter } from "./utils/constants";

import { initDatabase } from "./infrastructue/database/mongo";
import paymentRoutes from "./infrastructue/payments/payment.routes";



//servicio de express
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//call modules and add specific routes
//app.use("/house",houseRouter);

app.use("/api/payments", paymentRoutes);

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ msg:"hello luis" });
});

//mongodb://localhost:27017/
const url_database = "mongodb://"+Parameter.DATABASE_HOST+ ":"+Parameter.DATABASE_PORT+"/"+Parameter.DATABASE_NAME;

/*
app.listen(3001, async()  =>{
    console.log(url_database);
    await initDatabase(url_database);
    console.log("Server running at port 3001");
});
*/
app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);
console.log(`environment: ${process.env.NODE_ENV}`);