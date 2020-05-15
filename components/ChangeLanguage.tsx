import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import i18next from 'i18next';


const ChangeLanguage = () => {
    const [language, setLanguage] = useState("en");


    useEffect(() => {
        i18next.changeLanguage(language)}
      , [language]
    );


    function handleChange(event) {
        setLanguage(language);
    };

    

    return (
        <div className="ChangeLanguage">
            <Form>
                <Form.Row>
                        Language
                    <Form.Control as = "select" onChange={ handleChange }>
                        <option>en</option>
                        <option>cn</option>
                    </Form.Control>
                </Form.Row>
            </Form>
        </div>
    )
}

export default ChangeLanguage;