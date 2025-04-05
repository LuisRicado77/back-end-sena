import { Router, Request, Response } from "express";
import multer from "multer";
import { UploadImagesUseCase } from "../../../application/usecases/general/UploadImageUseCase";
import { LocalImageStorageService } from "../../services/LocalImageStorageService";
import { ResponseAdapter } from "../responseAdapter";
import { uploadMiddleware } from "../../middlewares/validateFiles.middleware";



const imageStorageService = new LocalImageStorageService();
const uploadImagesUseCase = new UploadImagesUseCase(imageStorageService);
const imageStorageRouter = Router();

imageStorageRouter.post("/", uploadMiddleware, async (req: Request, res: Response):Promise<void> => {
  try {
    console.log("Files received:", req.files);
    console.log("Body received:", req.body);

    if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
     console.log("Error req no tiene informacín")
    }

    const files = req.files as Express.Multer.File[];
   ResponseAdapter.handler(uploadImagesUseCase.execute(files), req, res);

   
  } catch (error) {
    console.error("Error in route:", error);
   
  }
});

export default imageStorageRouter;