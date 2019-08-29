import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme, { reset } from './Components/Theme';
import AppStateProvider from './context/index';

// Components
import Menu from './Components/Menu/Menu';
import Footer from './Components/Layout/Footer/Footer';
import MenuButtons from './Components/Menu/MenuButtons';
import Header from './Components/Layout/Header/Header';

import MaxWidth from './Components/ui/MaxWidth';

// Pages
import Board from './Board';
import Trendy from './Components/Trendy/Trendy';
import MessagesWithTag from './Components/Messages/Tags/MessagesWithTag';
import Comments from './Components/Messages/Comments/Comments';

// Auth
import Signup from './Components/Auth/Signup';
import Signin from './Components/Auth/Signin';
import Profile from './Components/Auth/User/Profile';

const httpLink = new HttpLink({
  uri: '/graphql'
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const { styles } = reset;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Global styles={{ styles }} />
        <Router>
          <AppStateProvider>
            <Header />
            <Menu />
            <MaxWidth>
              <Switch>
                <Route exact path="/" component={Board} />
                <Route path="/message/:id" component={Comments} />
                <Route path="/messages/:tag" component={MessagesWithTag} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/profile" component={Profile} />
                <Route path="/trendie" component={Trendy} />
              </Switch>
            </MaxWidth>
            <MenuButtons />
            <Footer />
          </AppStateProvider>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
