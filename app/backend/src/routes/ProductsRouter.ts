import { Router } from 'express';
import { getAllProductsController } from '../products/controller/get';

const productsRouter = Router();

productsRouter.get('/', getAllProductsController);

export default productsRouter;
