import SupportedCurrencyDAO from '../DAO/SupportedCurrencyDAO';

export class SupportedCurrencyController {
    
    async getSupportedCurrency() {
        const SCD = new SupportedCurrencyDAO();
        const data = await SCD.getSupportedCurrency()
        return Object.keys(data);
    }

}

export default new SupportedCurrencyController();