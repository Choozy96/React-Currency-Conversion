import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import i18next from 'i18next';
import { Container, Row, Col } from 'react-bootstrap';


const ChangeLanguage = () => {
    const [language, setLanguage] = useState("en");


    useEffect(() => {
        i18next.changeLanguage(language)}
      , [language]
    );


    function handleChange(event) {
        const selectedIndex = event.target.options.selectedIndex;
        const language = event.target.options[selectedIndex].value;
        setLanguage(language);
    };

    

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={{span:2, offset:10}}>
                        <Form>
                        <Form.Label>
                            Language
                        </Form.Label>
                        <Form.Control as = "select" onChange={ handleChange }>
                            <option value='en'>English</option>
                            <option value='cn'>华文</option>
                        </Form.Control>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ChangeLanguage;