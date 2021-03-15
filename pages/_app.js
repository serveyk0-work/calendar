import { Provider } from 'react-redux';
import Head from 'next/head';

import Header from '../components/header';
import store from '../redux/store';

import '../styles/about_us.scss';
import '../styles/calendar.scss';
import '../styles/header.scss';
import '../styles/home.scss';
import '../styles/index.scss';
import '../styles/reset.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="wrapper_components">
        
        <Component {...pageProps} />
      </div>
    </Provider>)
}

export default MyApp
