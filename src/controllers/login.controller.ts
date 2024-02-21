import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response) {
  const serviceResponse = await loginService.verifyLogin(req.body);

  if (serviceResponse.status !== 200) {
    return res.status((serviceResponse.status)).json(serviceResponse.data);  
  }
  
  res.status(200).json(serviceResponse.data);
}

export default {
  login,
};