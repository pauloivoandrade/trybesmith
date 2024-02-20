import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response) {
  const { name, price, userId } = req.body;
  const serviceResponse = await productsService.create({ name, price, userId });
  
  res.status(201).json(serviceResponse.data);
}

export default {
  create,
};