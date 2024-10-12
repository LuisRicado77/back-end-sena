import { Router } from "express";
import express, { Request, Response } from "express";
import {
  addhouse,
  deletehouseById,
  gethouses,
  gethousesById,
  updatehouse,
} from "./controller/house.controller";
import { schemaMiddleware } from "../../middlewares/schema.middleware";
import { createhouseSchema, updatehouseSchema } from "./schema/house.schema";

const houseRouter = Router();
//para botener información
houseRouter.get("/", async (req: Request, res: Response) => {
  try {
    const houses = await gethouses();
    res.status(200).send({
      msg: "Read wih success",
      data: houses,
    });
  } catch (error) {
    const err = error as Error;
    const errorMsg = err?.message;
    res.send(400).send({
      msg: errorMsg || "Error in Database",
    });
  }
});

houseRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
      const houses = await deletehouseById(id);
      res.status(200).send({
        msg: "Deleted wih success",
        data: houses,
      });
    } catch (error) {
      const err = error as Error;
      const errorMsg = err?.message;
      res.send(400).send({
        msg: errorMsg || "Error in Database",
      });
    }
  });


houseRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const houses = await gethousesById(id);
    res.status(200).send({
      msg: "Read wih success",
      data: houses,
    });
  } catch (error) {
    const err = error as Error;
    const errorMsg = err?.message;
    res.send(400).send({
      msg: errorMsg || "Error in Database",
    });
  }
});

//para creación
houseRouter.post(
  "/",
  schemaMiddleware(createhouseSchema),
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const response = await addhouse(body);
      res.status(201).send({
        msg: "created with success",
        data: response,
      });
    } catch (error) {
      const err = error as Error;
      const errorMsg = err?.message;
      res.send(400).send({
        msg: errorMsg || "Error in database",
      });
    }
  }
);

//para actualizar
houseRouter.patch(
  "/:id",
  schemaMiddleware(updatehouseSchema),
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await updatehouse(id, body);
      res.status(200).send({
        msg: "Update with success",
        data: response,
      });
    } catch (error) {
      const err = error as Error;
      const errorMsg = err?.message;
      res.send(400).send({
        msg: errorMsg || "Error in Database",
      });
    }
  }
);
export { houseRouter };