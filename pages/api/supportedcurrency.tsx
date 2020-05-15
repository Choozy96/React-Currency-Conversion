import { NextApiRequest, NextApiResponse } from 'next';
import SupportedCurrencyController from './Controllers/SupportedCurrencyController'


export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(await SupportedCurrencyController.getSupportedCurrency());
}