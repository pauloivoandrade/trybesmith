import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model'; 
import { Product } from '../types/Product';
import { ProductResponse } from '../types/ProductResponse';

async function create(product: ProductInputtableTypes): Promise<ProductResponse<Product>> {
  const data = await ProductModel.create(product);
  const response = { status: 201, data: data.dataValues };

  return response;
}

export default {
  create,
};