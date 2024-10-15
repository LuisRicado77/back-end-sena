import express, { Request, Response } from "express";


import { Parameter } from "./utils/constants";

import { initDatabase } from "./infrastructue/database/mongo";



//servicio de express
const app = express();
app.use(express.json());
//call modules and add specific routes
//app.use("/house",houseRouter);



app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ msg:"hello luis" });
});

//mongodb://localhost:27017/
const url_database = "mongodb://"+Parameter.DATABASE_HOST+ ":"+Parameter.DATABASE_PORT+"/"+Parameter.DATABASE_NAME;


app.listen(3001, async()  =>{
    console.log(url_database);
    await initDatabase(url_database);
    console.log("Server running at port 3001");
});