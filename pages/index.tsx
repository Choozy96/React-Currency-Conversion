import Head from 'next/head';
import App from '../components/App';
import ChangeLanguage from '../components/ChangeLanguage'
import i18next from 'i18next';

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
      <div className="container">
        <div className="card">
          <App />
        </div>
        <footer className="blockquote-footer">
          <ChangeLanguage />
        </footer>
      </div>
    </body>
    
    </>
  )
}