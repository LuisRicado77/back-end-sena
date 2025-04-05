import path from "path";
import { ImageStorageService } from "../../domain/services/IImageStorage.service";
import * as fs from 'fs';
import { Multer } from 'multer';
import { NotCreatedError } from "../../domain/errors/NotCreatedError";




export class LocalImageStorageService implements ImageStorageService {
  private uploadDir = path.join(__dirname, '../../../uploads');

  constructor() {
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  async saveImages(files: Express.Multer.File[]): Promise<string[]> {
    try {
      const imageUrls: string[] = [];
  
      for (const file of files) {
        const targetPath = path.join(this.uploadDir, file.originalname);
        
        // Renombrar/mover el archivo en lugar de escribir un buffer
        fs.renameSync(file.path, targetPath);
  
        const imageUrl = `/uploads/${file.originalname}`;
        imageUrls.push(imageUrl);
      }
  
      return imageUrls;
    } catch (error) {
      console.error("Error saving file:", error);
      throw new NotCreatedError("Could not save with success");
    }
  }
}
