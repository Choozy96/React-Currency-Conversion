import SupportedCurrencyDAO from '../DAO/SupportedCurrencyDAO';

export class SupportedCurrencyController {
    
    async getSupportedCurrency() {
        const data = await SupportedCurrencyDAO.getSupportedCurrency()
        return Object.keys(data);
    }

}

export default new SupportedCurrencyController();