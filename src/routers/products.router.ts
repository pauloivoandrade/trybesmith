import { Router } from 'express';
import productsController from '../controllers/products.controller';
import { 
  validationsName,
  validationsPrice,
  validationUserId,
  existingFields } from '../middlewares/createProductMiddleware';

const productRouter = Router();

productRouter.post(
  '/products',
  existingFields,
  validationsName,
  validationsPrice,
  validationUserId,
  productsController.create,
);
productRouter.get('/products', productsController.list);

export default productRouter;