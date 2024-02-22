import { Router } from 'express';
import productsController from '../controllers/products.controller';
import { 
  validationsName,
  validationsPrice,
  validationUserId } from '../middlewares/createProductMiddleware';

const productRouter = Router();

productRouter.post(
  '/products',
  validationsName,
  validationsPrice,
  validationUserId,
  productsController.create,
);
productRouter.get('/products', productsController.list);

export default productRouter;