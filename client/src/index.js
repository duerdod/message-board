import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Board from './Board';
import Comments from './Components/Messages/Comments/Comments';
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
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Board} />
            <Route path="/message/:id" component={Comments} />
          </Switch>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
