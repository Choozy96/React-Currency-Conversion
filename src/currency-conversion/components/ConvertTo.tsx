import React from 'react';
import Form from 'react-bootstrap/Form';
import '../../../public/i18n';
import { useTranslation } from 'react-i18next';

interface IProps {
    convertTo: string,
    currencyList: Array<string>,
    onConvertToChange: (currency: string) => void,
}

const ConvertTo = (props : IProps) => {

    const {t} = useTranslation();

    const currencyList: Array<string> = props.currencyList;
    function handleChange(event) {
        props.onConvertToChange(event.target.value);
    }

    function renderCurrencyList(currencyList: Array<string>) {
        let elementList = [];
        for (const currency of currencyList) {
            elementList.push(<option key={currency} value={currency}>{currency}</option>)
        }
        return elementList;
    }

    return (
        <>
        <Form.Label>{t('convert-to')}</Form.Label>
        <Form.Control as = "select" onChange={ handleChange } value={props.convertTo}>
            {renderCurrencyList(currencyList)}
        </Form.Control>
        </>
    )
}

export default ConvertTo;