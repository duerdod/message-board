import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import MessageBoard from './MessageBoard';
import theme, { reset } from './Components/Theme';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  fetchOptions: {
    mode: 'cors'
  }
});

const { styles } = reset;

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={{ styles }} />
    <ApolloProvider client={client}>
      <MessageBoard />
    </ApolloProvider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
