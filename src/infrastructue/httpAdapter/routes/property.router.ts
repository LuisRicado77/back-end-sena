import { Router, Request, Response } from "express";
import { RegisterUseCase } from "../../../application/usecases/general/Register.UseCase";
import { LoginUseCase } from "../../../application/usecases/general/Login.UseCase";
import { FindUserUseCase } from "../../../application/usecases/general/findUser.UseCase";
import { PropertyService } from "../../services/Property.service";
import { ResponseAdapter } from "../responseAdapter";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { UpdateUserUseCase } from "../../../application/usecases/general/updateUser.UseCase";
import { JwtTokenService } from "../../services/Token.service";
import { schemaValidator } from "../../middlewares/shema.middleware";
import {
  propertySchemaCreate,
  propertySchemaUpdate,
} from "../../schemas/property.schema";
import { AddPropertyUseCase } from "../../../application/usecases/lessor/AddProperty.UseCase";
import { UpdatePropertyUseCase } from "../../../application/usecases/lessor/UpdateProperty.UseCase";
import { FindPropertyUseCase } from "../../../application/usecases/lessor/FindProperty.UseCase";
import { DeletePropertyUseCase } from "../../../application/usecases/lessor/DeleteProperty.UseCase";
import { GetAllProperties } from "../../../application/usecases/lessor/GetAllProperties.UseCase";
import { GetError } from "../../../domain/errors/GetError";
import { GetAllFavoritesPropertiesByTenant } from "../../../application/usecases/tenant/GetAllFavoritesPropertiesByUser.UseCase";
import { getAllPropertiesCreatedByLessor } from "../../../application/usecases/lessor/GetAllPropertiesByLessor";

const propertyService = new PropertyService();
const jwtTokenService = new JwtTokenService();

const addPropertyUseCase = new AddPropertyUseCase(propertyService);
const updatePropertyUseCase = new UpdatePropertyUseCase(propertyService);
const findPropertyUseCase = new FindPropertyUseCase(propertyService);
const deletePropertyUseCase = new DeletePropertyUseCase(propertyService);
const getAllPropertiesUseCase = new GetAllProperties(propertyService);
const getAllPropertiesByLessor  = new getAllPropertiesCreatedByLessor(propertyService);


const propertyRouter = Router();

//register an property
propertyRouter.post(
  "/",
  schemaValidator(propertySchemaCreate),
  async (req: Request, res: Response) => {
    
    console.log("ejecutado create property post");
    const body = req.body;
    ResponseAdapter.handler(addPropertyUseCase.execute(body), req, res);
    //console.log("ejecutado create property post");
  }
);

//update an property
propertyRouter.patch(
  "/:id",
  schemaValidator(propertySchemaUpdate),
  async (req: Request, res: Response) => {
    try {
      console.log("ruta del update running");
      const { id } = req.params;
      const body = req.body;
      ResponseAdapter.handler(updatePropertyUseCase.execute(id, body), req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }
);


//getByid
propertyRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    ResponseAdapter.handler(findPropertyUseCase.execute(id), req, res);
  } catch (Error) {
    throw new NotFoundError();
  }
});



//getAllProperties
propertyRouter.get("/", async (req: Request, res: Response)=>{
    try {
        ResponseAdapter.handler(getAllPropertiesUseCase.execute(),req,res);
    } catch (error) {
        throw new NotFoundError();
    }
})


//getAllPropertiesCreatedByLessor
propertyRouter.get("/lessor/:id", async (req:Request, res:Response) =>{
  try {
    const { id } = req.params;
   ResponseAdapter.handler(getAllPropertiesByLessor.execute(id),req,res);
  } catch (error) {
    throw new GetError("Could not get with success");
  }
})


//delete
propertyRouter.delete("/:id", async (req:Request, res: Response) =>{
    const id = req.params.id
    try{
        ResponseAdapter.handler(deletePropertyUseCase.execute(id),req, res)
    }catch(error){
        throw new NotFoundError("Could not delete with success");
    }
})

//update

export { propertyRouter };
