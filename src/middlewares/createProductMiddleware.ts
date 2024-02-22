import { Request, Response, NextFunction } from 'express';

export async function existingFields(req: Request, res: Response, next: NextFunction) {
  const { name, price, userId } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (price === undefined) {
    return res.status(400).json({ message: '"price" is required' });
  }
  if (userId === undefined) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  next();
}

export async function validationsName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (name.length <= 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
}
  
export async function validationsPrice(req: Request, res: Response, next: NextFunction) {
  const { price } = req.body;
  
  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }
  if (price.length <= 2) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }
  next();
}
  
export async function validationUserId(req: Request, res: Response, next: NextFunction) {
  const { userId } = req.body;
  
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  next();
}