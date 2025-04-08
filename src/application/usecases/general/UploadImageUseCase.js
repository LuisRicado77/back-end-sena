"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImagesUseCase = void 0;
class UploadImagesUseCase {
    constructor(imageStorageService) {
        this.imageStorageService = imageStorageService;
    }
    execute(files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!files || files.length === 0) {
                    throw new Error('No files provided');
                }
                const newImages = yield this.imageStorageService.saveImages(files);
                return newImages;
            }
            catch (error) {
                console.error("Error saving images:", error);
                throw new Error("Error at save");
            }
        });
    }
}
exports.UploadImagesUseCase = UploadImagesUseCase;
