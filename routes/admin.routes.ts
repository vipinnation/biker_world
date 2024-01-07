import express, { Request, Response } from 'express';
import { ProductController } from '../app/controller/product.controller';

const routes = express.Router();


routes.post('/product', ProductController.addProduct)
routes.put("/product", ProductController.updateProduct)
routes.delete("/product", ProductController.deleteProduct)

// routes.get('/getAdminOrder', checkLogin, OrderController().getAdminOrder)
// routes.post('/updateOrder', checkLogin, OrderController().updateOrder)
// routes.get('/getwithdrawrequest', checkLogin, referAndEarn().getWithdrawRequest)
// routes.post('/updatewithdrawrequest', checkLogin, referAndEarn().updateWithdrawRequest)

export const adminRoutes = routes;