import { ImageStorageService } from "../../../domain/services/IImageStorage.service";


export class UploadImagesUseCase {
  constructor(private readonly imageStorageService: ImageStorageService) {}

  async execute(files: Express.Multer.File[]): Promise<string[]> {
    try {
      if (!files || files.length === 0) {
        throw new Error('No files provided');
      }

      const newImages: string[] = await this.imageStorageService.saveImages(files);
      return newImages;
    } catch (error) {
      console.error("Error saving images:", error);
      throw new Error("Error at save");
    }
  }
}
