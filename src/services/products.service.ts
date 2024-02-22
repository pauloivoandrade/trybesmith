import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model'; 
import { ProductResponse, ProductResponses, MessageResponse } from '../types/ProductResponse';

async function list(): Promise<ProductResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();
  
  return { status: 200, data: products };
}
  
async function create(product: ProductInputtableTypes)
  : Promise<ProductResponse<ProductResponses | MessageResponse>> {
  const validateUserId = await ProductModel.findByPk(product.userId);
    
  if (!validateUserId) {
    return { status: 422, data: { message: '"userId" not found' } };
  }
  const data = await ProductModel.create(product);
  if (!data) {
    return { status: 500, data: {} as ProductResponses };
  }
  const response = { status: 201, data: data.dataValues as ProductResponses };
  
  return response;
}
  
export default {
  create,
  list,
};
