import { Response, Request, Router } from "express";
import { ApplicationService } from "../../services/Application.service";
import { RequestRentalApplicationUseCase } from "../../../application/usecases/tenant/SendRequestRentalApplication.UseCase";
import { RejectOrAcceptRentalApplicationUseCase } from "../../../application/usecases/lessor/RejectOrAcceptRentalApplication";
import { ResponseAdapter } from "../responseAdapter";
import { schemaValidator } from "../../middlewares/shema.middleware";
import { applicationSchemaCreate, applicationSchemaUpdate } from "../../schemas/application.shema";
import { GetAllApplicationsUseCase } from "../../../application/usecases/lessor/GetAllApplications.UseCase";
import { GetApplicationUseCase } from "../../../application/usecases/lessor/GetApplication.UseCase";
import { GetError } from "../../../domain/errors/GetError";
import { NotFoundError } from "../../../domain/errors/NotFoundError";

const applicationRouter = Router();

const applicationService = new ApplicationService();
const requestRentalApplicationUseCase = new RequestRentalApplicationUseCase(applicationService);
const rejectOrAcceptRentalApplicationUseCase = new RejectOrAcceptRentalApplicationUseCase(applicationService);
const getAllApplicationUseCase = new GetAllApplicationsUseCase(applicationService);
const getApplicationUseCase = new GetApplicationUseCase(applicationService);


//send
applicationRouter.post("/", schemaValidator(applicationSchemaCreate), async (req: Request, res: Response) => {
  try {
    console.log("post router")
    const body = req.body;
    ResponseAdapter.handler(
      requestRentalApplicationUseCase.execute(body),
      req,
      res
    );
  } catch (error) {
    console.log(error)
    throw new GetError()
  }
});

//accept or reject
applicationRouter.patch("/:id", schemaValidator(applicationSchemaUpdate), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    ResponseAdapter.handler(
      rejectOrAcceptRentalApplicationUseCase.execute(id, body),
      req,
      res
    );
  } catch (error) {
    console.log(error)
    throw new NotFoundError()
  }
});

//getApplication
applicationRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    ResponseAdapter.handler(getApplicationUseCase.execute(id), req, res)
  } catch (error) {
    console.log(error)
    throw new Error("");

  }
})

//getAll
applicationRouter.get("/", async (req: Request, res: Response) => {
  try {
    ResponseAdapter.handler(getAllApplicationUseCase.execute(), req, res)
  } catch (error) {
    console.log(error)
    throw new GetError("");

  }
})

export default applicationRouter;