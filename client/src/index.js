import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Board from './Board';
import theme, { reset } from './Components/Theme';

const headers = {
  authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJib2FyZC1hcGlAZGV2Iiwicm9sZXMiOlsiYWRtaW4iXX0sImlhdCI6MTU2NDU1MDQzMSwiZXhwIjoxNTY1MTU1MjMxfQ.oATwRrA392-Y3Dm2278rEoTpFxGX2oESBE93eY1wqGY'
};

const httpLink = new HttpLink({
  uri: '/graphql'
  // headers
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
