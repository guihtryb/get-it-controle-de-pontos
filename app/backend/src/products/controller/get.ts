import { Request, Response } from 'express';
import { StatusCode } from '../../enums';
import Products from '../../database/models/Products';

export const getAllProductsController = async (_req: Request, res:Response) => {
  const products =  await Products.findAll()

  res.status(StatusCode.SUCCESSFULLY_REQUEST).json(products);
};
