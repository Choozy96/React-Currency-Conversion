import fetch from "node-fetch";

export class RatesDAO {
    private apiKey: string;

    constructor() {
        this.apiKey = "1c539a8c216f4f928fe8f48221af28d3";
    }

    async getExchangeRates() {
        const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${this.apiKey}`);
        const data = await response.json();
        return data;
    }
}

export default new RatesDAO();