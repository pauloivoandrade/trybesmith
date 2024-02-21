import UserModel from '../database/models/user.model';
import { UserAndProductResponse, UserResponse } from '../types/UserResponse';
import ProductModel from '../database/models/product.model';

async function list(): Promise<UserResponse<UserAndProductResponse[]>> {
  const users = await UserModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });
  console.log(users);
  
  const formattedUsers: UserAndProductResponse[] = users.map((user: any) => {
    const username = user.username as string;
    const productIds = user.productIds.map((product: any) => product.id);

    return { username, productIds };
  });

  return { status: 200, data: formattedUsers };
}

export default {
  list,
};
