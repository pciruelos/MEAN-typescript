"use strict";
//encargado de CREAR Y CONFIGURAR el servidor
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
//inicializaciones
//settings
app.set('port', process.env.PORT || 3000);
//midlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
//global variables
//routes
app.use('/api', index_routes_1.default);
app.use(auth_routes_1.default);
//static files
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
