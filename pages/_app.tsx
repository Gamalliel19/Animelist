import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/apolloClient';
import Context from '../state/Context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Context.Provider>
        <Component {...pageProps} />
      </Context.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
