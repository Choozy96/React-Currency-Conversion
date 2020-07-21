import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ConvertFrom from '../components/ConvertFrom';
import ConvertTo from '../components/ConvertTo';
import ConvertQuantity from '../components/ConvertQuantity';
import { Card, Row, Col } from 'react-bootstrap';

const CurrencyConversionContainer = () => {

    const [convertFrom, setConvertFrom] = useState("SGD");
    const [convertTo, setConvertTo] = useState("SGD");
    const [convertFromQuantity, setConvertFromQuantity] = useState<number | null>(null);
    const [convertToQuantity, setConvertToQuantity] = useState<number | null>(null);
    const [currencyList, setCurrencyList] = useState([])


    async function getSupportedCurrency() {
        const response = await fetch("http://localhost:3000/api/supportedcurrency");
        const data = await response.json();
        setCurrencyList(data);
    }

    // using this as similar effect to component did mount
    useEffect(() => {
        getSupportedCurrency()}
      , []
    );

    const onConvertFromChange = (currency: string) => {
        setConvertFrom(currency);
        calculateConvertedAmount(currency, convertTo, convertFromQuantity)
            .then((res) => {setConvertToQuantity(res)})
    }

    const onConvertToChange = (currency: string) => {
        setConvertTo(currency);
        calculateConvertedAmount(currency, convertFrom, convertToQuantity)
            .then((res) => {setConvertFromQuantity(res)})
    }

    const onConvertFromQuantityChange = (quantity: number) => {
        setConvertFromQuantity(quantity);
        calculateConvertedAmount(convertFrom, convertTo, quantity)
            .then((res) => {setConvertToQuantity(res)});
    }

    const onConvertToQuantityChange = (quantity: number) => {
        setConvertToQuantity(quantity);
        calculateConvertedAmount(convertTo, convertFrom, quantity)
            .then((res) => {setConvertFromQuantity(res)});
    }

    const calculateConvertedAmount = async(convertFrom: string, convertTo: string, convertQuantity: number): Promise<number> => {
        const exchangeRates = await getExchangeRates();
        return parseFloat((convertQuantity / exchangeRates[convertFrom] * exchangeRates[convertTo]).toFixed(2));
    }

    const getExchangeRates = async () => {
        const response = await fetch("http://localhost:3000/api/rates");
        const data = await response.json();
        const rates = data;
        return rates;
    }

    return (
        <>
        <Card style={{ width: '60%' }}>
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                            <ConvertFrom convertFrom={convertFrom} currencyList={currencyList} onConvertFromChange={onConvertFromChange} /> 
                        </Col>
                        <Col>
                            <ConvertTo convertTo={convertTo} currencyList={currencyList} onConvertToChange={onConvertToChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ConvertQuantity quantity={convertFromQuantity} onQuantityChange={onConvertFromQuantityChange} />
                        </Col>
                        <Col>
                            <ConvertQuantity quantity={convertToQuantity} onQuantityChange={onConvertToQuantityChange} />
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        </>
    );
}

export default CurrencyConversionContainer;