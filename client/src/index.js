import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header';
import Board from './Board';
import Footer from './Components/Layout/Footer/Footer';
import Comments from './Components/Messages/Comments/Comments';
import theme, { reset } from './Components/Theme';
import AppStateProvider from './context/index';
import MenuButtons from './Components/Menu/MenuButtons';
import Menu from './Components/Menu/Menu';

// Auth
import Signup from './Components/Auth/Signup';

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
      <ApolloProvider client={client}>
        <Global styles={{ styles }} />
        <AppStateProvider>
          <Router>
            <Header />
            <Menu />
            <Switch>
              <Route exact path="/" component={Board} />
              <Route path="/message/:id" component={Comments} />
              <Route path="/signup" component={Signup} />
            </Switch>
            <MenuButtons />
            <Footer />
          </Router>
        </AppStateProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
