import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import '../public/i18n';
import { useTranslation } from 'react-i18next';

interface IProps {
    convertQuantity: number,
    onConvertQuantityChange: (quantity: number) => void,
}

const ConvertQuantity = (props : IProps) => {

    function handleChange(event) {
        props.onConvertQuantityChange(event.target.value);
    }

    function renderFormLabel() {
        const { t, i18n } = useTranslation();
        return <>{t('Convert From')}</>
    }
    
    return (
        <>
        <Form.Label>{renderFormLabel()}:</Form.Label>
        <Form.Control type="number" step="0.01" min="0" placeholder="Quantity" onChange={handleChange}/>
        </>
    )
}



export default ConvertQuantity