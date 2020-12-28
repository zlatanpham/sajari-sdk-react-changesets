/* eslint-disable react/jsx-props-no-spreading */
import './app.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { SSRProvider } from '@tpham0/react-components';

const title = 'React SDK';

const App = ({ Component, pageProps }: AppProps) => (
  <SSRProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta title={title} />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <Component {...pageProps} />
  </SSRProvider>
);

export default App;
