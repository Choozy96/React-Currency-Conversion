import Head from 'next/head';
import CurrencyConversionContainer from '../src/currency-conversion/container/CurrencyConversionContainer';
import ChangeLanguage from '../src/change-language/components/ChangeLanguage'
import i18next from 'i18next';
import { Container } from 'react-bootstrap';

export default function Home() {

  i18next.init({
    fallbackLng: ["en", "cn"]
  });

  return (
    <>
    
    <Head>
      <title>Currency Exchange</title>
    </Head>
    <body>
        <Container className="d-flex justify-content-center">
          <CurrencyConversionContainer />
        </Container>
        <footer>
          <ChangeLanguage />
        </footer>
    </body>
    
    </>
  )
}