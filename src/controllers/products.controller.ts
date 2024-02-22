import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function list(_req: Request, res: Response) {
  const serviceResponse = await productsService.list();
    
  res.status(200).json(serviceResponse.data);
}

async function create(req: Request, res: Response) {
  const { name, price, userId } = req.body;

  try {
    const serviceResponse = await productsService.create({ name, price, userId });
    res.status(serviceResponse.status).json(serviceResponse.data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default {
  create,
  list,
};