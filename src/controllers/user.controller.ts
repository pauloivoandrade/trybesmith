import { Request, Response } from 'express';
import usersService from '../services/users.service';

async function list(_req: Request, res: Response) {
  const productResponse = await usersService.list();
      
  res.status(200).json(productResponse.data);
}

export default {
  list,
};