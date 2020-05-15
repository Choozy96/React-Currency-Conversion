import RatesDAO from '../DAO/RatesDAO';

export class RatesController {
    
    async getExchangeRates() {
        const data = await RatesDAO.getExchangeRates()
        return data.rates;
    }

}

export default new RatesController();