import express, { Request, Response } from 'express';
import { adminRoutes } from './admin.routes';
import { authRoutes } from './auth.routes';

const routes = express.Router();


routes.get('/', (req: Request, res: Response) => {
    try {
        res.send('Welcome to Kustom Part Api version 1.0 ');
    } catch (error) {
    }
});

routes.use("/auth", authRoutes)
routes.use("/admin", adminRoutes)


export = routes;
