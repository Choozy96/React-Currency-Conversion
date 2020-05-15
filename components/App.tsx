import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ConvertFrom from './ConvertFrom';
import ConvertTo from './ConvertTo';
import ConvertQuantity from './ConvertQuantity';


const App = () => {

    const [convertFrom, setConvertFrom] = useState("SGD");
    const [convertTo, setConvertTo] = useState("SGD");
    const [convertQuantity, setConvertQuantity] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [currencyList, setCurrencyList] = useState([])


    async function getSupportedCurrency() {
        const response = await fetch("http://localhost:3000/api/supportedcurrency");
        const data = await response.json();
        console.log("calling internal support");
        console.log(data)
        setCurrencyList(data);
    }

    // using this as similar effect to component did mount
    useEffect(() => {
        getSupportedCurrency()}
      , []
    );

    useEffect(() => {
        convertCurrency()}
      , [convertFrom, convertTo, convertQuantity]
    );

    const onConvertFromChange = (currency: string) => {
        setConvertFrom(currency);
    }

    const onConvertToChange = (currency: string) => {
        setConvertTo(currency);
    }

    const onConvertQuantityChange = (quantity: number) => {
        setConvertQuantity(quantity);
    }
    
    async function convertCurrency() {
        const newAmount = await Promise.resolve(calculateConvertedAmount(convertFrom, convertTo, convertQuantity));
        const roundedAmount = newAmount.toFixed(2);
        setConvertedAmount( Number(roundedAmount) );
        console.log("converting");
    }

    async function calculateConvertedAmount(convertFrom: string, convertTo: string, convertQuantity) {
        const exchangeRates = await getExchangeRates();
        return convertQuantity / exchangeRates[convertFrom] * exchangeRates[convertTo];
    }

    async function getExchangeRates() {
        const response = await fetch("http://localhost:3000/api/rates");
        const data = await response.json();
        console.log("getting internal rates");
        const rates = data;
        return rates;
    }

    return (
        <>
        <div className="App">
            <Form>
                <Form.Row>
                    <ConvertFrom convertFrom={convertFrom} currencyList={currencyList} onConvertFromChange={onConvertFromChange} /> 
                    <ConvertTo convertTo={convertTo} currencyList={currencyList} onConvertToChange={onConvertToChange} />
                </Form.Row>
                <Form.Row>
                    <ConvertQuantity convertQuantity={convertQuantity} onConvertQuantityChange={onConvertQuantityChange} />
                </Form.Row>
            </Form>
            
        </div>
        <div className="h2"> 
            {`$${convertedAmount.toFixed(2)}`}
        </div>
        </>
    );
}

export default App;