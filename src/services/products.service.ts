import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model'; 
import { ProductResponse, ProductResponses } from '../types/ProductResponse';
  
async function create(product: ProductInputtableTypes): Promise<ProductResponse<ProductResponses>> {
  const data = await ProductModel.create(product);
  
  if (!data) {
    // Handle the case where data is undefined (if create fails)
    return { status: 500, data: {} as ProductResponses };
  }
  
  const response = { status: 201, data: data.dataValues as ProductResponses };
  
  return response;
}
  
export default {
  create,
};
