import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt.util';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import { Token } from '../types/token';
import { Login } from '../types/Login';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  if (!login.username || !login.password) {
    return { status: 400, data: { message: '"username" and "password" are required' } };
  }
  
  const foundUser = await UserModel.findOne({ where: { username: login.username } });
    
  if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  
  const { id, username } = foundUser.dataValues;
  
  const token = jwtUtil.sign({ id, username });
  
  return { status: 200, data: { token } };
}
export default {
  verifyLogin,
};