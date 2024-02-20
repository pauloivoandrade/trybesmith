import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function list(_req: Request, res: Response) {
  const serviceResponse = await productsService.list();
    
  res.status(200).json(serviceResponse.data);
}

async function create(req: Request, res: Response) {
  const { name, price, userId } = req.body;
  const serviceResponse = await productsService.create({ name, price, userId });
  
  res.status(201).json(serviceResponse.data);
}

export default {
  create,
  list,
};