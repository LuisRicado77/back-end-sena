"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalImageStorageService = void 0;
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const NotCreatedError_1 = require("../../domain/errors/NotCreatedError");
class LocalImageStorageService {
    constructor() {
        this.uploadDir = path_1.default.join(__dirname, '../../../uploads');
        if (!fs.existsSync(this.uploadDir)) {
            fs.mkdirSync(this.uploadDir, { recursive: true });
        }
    }
    saveImages(files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imageUrls = [];
                for (const file of files) {
                    const targetPath = path_1.default.join(this.uploadDir, file.originalname);
                    // Renombrar/mover el archivo en lugar de escribir un buffer
                    fs.renameSync(file.path, targetPath);
                    const imageUrl = `/uploads/${file.originalname}`;
                    imageUrls.push(imageUrl);
                }
                return imageUrls;
            }
            catch (error) {
                console.error("Error saving file:", error);
                throw new NotCreatedError_1.NotCreatedError("Could not save with success");
            }
        });
    }
}
exports.LocalImageStorageService = LocalImageStorageService;
