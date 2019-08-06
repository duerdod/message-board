import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Board from './Board';
import theme, { reset } from './Components/Theme';

const httpLink = new HttpLink({
  uri: '/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const { styles } = reset;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={{ styles }} />
      <ApolloProvider client={client}>
        <Board />
      </ApolloProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
