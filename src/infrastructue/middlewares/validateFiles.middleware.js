"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Configuración de almacenamiento
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        console.log("Nombre del archivo:", file.originalname);
        console.log("Extensión del archivo:", path_1.default.extname(file.originalname).toLowerCase());
        console.log("Mimetype recibido:", file.mimetype);
        cb(null, "uploads/"); // Asegúrate de que esta carpeta existe
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
// Middleware para manejar la subida de imágenes
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 20 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        console.log("Nombre del archivo:", file.originalname);
        console.log("Extensión del archivo:", path_1.default.extname(file.originalname).toLowerCase());
        console.log("Mimetype recibido:", file.mimetype);
        const fileTypes = /jpeg|jpg|png|webp/;
        const extname = fileTypes.test(path_1.default.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype) || file.mimetype === "application/octet-stream";
        if (extname && mimetype) {
            return cb(null, true);
        }
        else {
            return cb(new Error(`Solo se permiten imágenes (JPEG, JPG, PNG, WEBP). Recibido: ${file.mimetype}`));
        }
    },
});
// Middleware para recibir múltiples imágenes con nombre "file"
exports.uploadMiddleware = upload.array("images", 5); // Hasta 5 imágenes
