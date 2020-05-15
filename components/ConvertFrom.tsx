import React from 'react';
import Form from 'react-bootstrap/Form';

import '../public/i18n';
import { useTranslation } from 'react-i18next';

interface IProps {
    convertFrom: string,
    currencyList: Array<string>,
    onConvertFromChange: (currency: string) => void,
}

const ConvertFrom = (props : IProps) => {

    const currencyList = props.currencyList;
    // const currencyList: Array<string> = ["SGD", "USD"];

    function handleChange(event) {
        props.onConvertFromChange(event.target.value);
    }

    function renderCurrencyList(currencyList) {
        let elementList = [];
        for (let currency of currencyList) {
            elementList.push(<option value={currency}>{currency}</option>)
        }
        return elementList;
    }

    function renderFormLabel() {
        const { t, i18n } = useTranslation();
        return <>{t('Convert From')}</>
    }

    return (
        <>
        <Form.Label>{renderFormLabel()}:</Form.Label>
        <Form.Control as = "select" onChange={ handleChange }>
            {renderCurrencyList(currencyList)}
        </Form.Control>
        </>
    )
}



export default ConvertFrom;