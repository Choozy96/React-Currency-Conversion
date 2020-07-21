import fetch from "node-fetch";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { SupportedCurrencyDAOInterface } from "../interfaces";
import { TYPES } from "../types";

@injectable()
export class SupportedCurrencyDAO implements SupportedCurrencyDAOInterface{

    async getSupportedCurrency() {
        const response = await fetch("https://openexchangerates.org/api/currencies.json");
        const data = await response.json();
        return data;
    }
}

export default SupportedCurrencyDAO;
