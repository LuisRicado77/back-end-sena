import multer from "multer";
import path from "path";

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Nombre del archivo:", file.originalname);
    console.log("Extensión del archivo:", path.extname(file.originalname).toLowerCase());
    console.log("Mimetype recibido:", file.mimetype);
  
    cb(null, "uploads/"); // Asegúrate de que esta carpeta existe
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Middleware para manejar la subida de imágenes
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    console.log("Nombre del archivo:", file.originalname);
  console.log("Extensión del archivo:", path.extname(file.originalname).toLowerCase());
  console.log("Mimetype recibido:", file.mimetype);

  const fileTypes = /jpeg|jpg|png|webp/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype) || file.mimetype === "application/octet-stream"; 

  if (extname && mimetype) {  
    return cb(null, true);
  } else {
    return cb(new Error(`Solo se permiten imágenes (JPEG, JPG, PNG, WEBP). Recibido: ${file.mimetype}`));
  }
  },
});

// Middleware para recibir múltiples imágenes con nombre "file"
export const uploadMiddleware = upload.array("images", 5); // Hasta 5 imágenes


