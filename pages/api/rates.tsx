import { NextApiRequest, NextApiResponse } from 'next';
import RatesController from './Controllers/RatesController'


export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(await RatesController.getExchangeRates());
}