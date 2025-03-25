export interface ImageStorageService {
    saveImages(files: Express.Multer.File[]): Promise<string[]>;
  }