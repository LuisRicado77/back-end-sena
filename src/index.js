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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./infrastructue/httpAdapter/routes/user.router");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
const sequelize_1 = __importDefault(require("./infrastructue/database/sequelize"));
const property_router_1 = require("./infrastructue/httpAdapter/routes/property.router");
const application_router_1 = __importDefault(require("./infrastructue/httpAdapter/routes/application.router"));
const review_router_1 = __importDefault(require("./infrastructue/httpAdapter/routes/review.router"));
const favorite_router_1 = __importDefault(require("./infrastructue/httpAdapter/routes/favorite.router"));
const imageStorage_router_1 = __importDefault(require("./infrastructue/httpAdapter/routes/imageStorage.router"));
//servicio de express
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
app.use("/users", user_router_1.userRouter);
app.use("/properties", property_router_1.propertyRouter);
app.use("/applications", application_router_1.default);
app.use("/reviews", review_router_1.default);
app.use("/favorites", favorite_router_1.default);
app.use("/upload", imageStorage_router_1.default);
//call modules and add specific routes
//app.use("/house",houseRouter);
//app.use(paymentRoutes);
//mongodb://localhost:27017/
//const url_database = "mongodb://"+Parameter.DATABASE_HOST+ ":"+Parameter.DATABASE_PORT+"/"+Parameter.DATABASE_NAME;
/*
app.listen(3001, async()  =>{
    //console.log(url_database);
    //await initDatabase(url_database);
    await testConnection();
    console.log("Server running at port 3001");
});*/
/*
(async () => {
    try {

      // Inicia el servidor
      app.listen(3001, async () => {
        await sequelize.authenticate()
        .then(() => console.log('Conexión establecida exitosamente.'))
        .catch(err => console.error('Error al conectar a la base de datos:', err));
        await sequelize.sync({ alter: true }); // Cambiar a `force: true` para recrear tablas
        console.log('¡Tablas sincronizadas correctamente!');
        
        console.log('Servidor ejecutándose en http://localhost:3001');
      });
    } catch (error) {
      console.error('Error al iniciar la aplicación:', error);
    }
  })();
*/
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize_1.default.authenticate();
        console.log('Conexión establecida correctamente.');
        // Deshabilitar restricciones de clave foránea
        yield sequelize_1.default.query('SET FOREIGN_KEY_CHECKS = 0');
        // Sincronizar modelos con la base de datos
        yield sequelize_1.default.sync({ alter: true }); // Usa `force: true` solo en desarrollo
        console.log('Tablas sincronizadas correctamente.');
        // Habilitar restricciones de clave foránea
        yield sequelize_1.default.query('SET FOREIGN_KEY_CHECKS = 1');
        app.listen(3001, () => {
            console.log("server running in port 3001");
        });
    }
    catch (error) {
        console.error('Error al iniciar la aplicación:', error);
    }
});
startApp();
//app.listen(PORT);
//console.log(`Server on port http://localhost:${PORT}`);
//console.log(`environment: ${process.env.NODE_ENV}`);
