import React from 'react';
import Form from 'react-bootstrap/Form';
import '../../../public/i18n';
import { useTranslation } from 'react-i18next';

interface IProps {
    convertFrom: string,
    currencyList: Array<string>,
    onConvertFromChange: (currency: string) => void,
}

const ConvertFrom = (props : IProps) => {

    const {t} = useTranslation();

    const currencyList = props.currencyList;

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

    return (
        <>
        <Form.Label>{t('convert-from')}</Form.Label>
        <Form.Control as = "select" onChange={ handleChange } value={props.convertFrom}>
            {renderCurrencyList(currencyList)}
        </Form.Control>
        </>
    )
}



export default ConvertFrom;