import fetch from "node-fetch";

export class RatesDAO {
    private apiKey: string;

    constructor() {
        this.apiKey = String(process.env.OPEN_EXCHANGE_API_KEY);
        console.log(this.apiKey)
    }

    async getExchangeRates() {
        const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${this.apiKey}`);
        const data = await response.json();
        return data;
    }
}

export default new RatesDAO();