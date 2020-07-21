import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../../../public/i18n';
import { useTranslation } from 'react-i18next';

interface IProps {
    quantity: number | null,
    onQuantityChange: (quantity: number) => void,
}

const ConvertQuantity = (props : IProps) => {

    const {t} = useTranslation();

    function handleChange(event) {
        props.onQuantityChange(event.target.value);
    }
    
    return (
        <>
        <Form.Label>{t('quantity')}</Form.Label>
        <Form.Control type="number" step="0.01" min="0" placeholder="Quantity" value={props.quantity} onChange={handleChange}/>
        </>
    )
}



export default ConvertQuantity