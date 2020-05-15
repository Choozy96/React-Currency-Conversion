import fetch from "node-fetch";

export class SupportedCurrencyDAO {

    async getSupportedCurrency() {
        const response = await fetch("https://openexchangerates.org/api/currencies.json");
        const data = await response.json();
        return data;
    }
}

export default new SupportedCurrencyDAO();
