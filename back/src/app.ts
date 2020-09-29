//encargado de CREAR Y CONFIGURAR el servidor

import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index.routes';
import authRoutes from './routes/auth.routes';
import priveRoutes from './routes/private.routes';
import path from 'path';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

const app = express();

//inicializaciones

//settings
app.set('port', process.env.PORT || 3000);

//midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(passport.initialize());
passport.use(passportMiddleware);

//global variables

//routes
app.use('/api', indexRoutes);
app.use(authRoutes);
app.use(priveRoutes);

//static files
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;

