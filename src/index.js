import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import MessageBoard from './MessageBoard';
import * as serviceWorker from './serviceWorker';
import Theme from './Components/Theme';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  fetchOptions: {
    mode: 'cors'
  }
});

const App = () => (
  <ThemeProvider theme={Theme}>
    <ApolloProvider client={client}>
      <MessageBoard />
    </ApolloProvider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
