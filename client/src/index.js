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
import MaxWidth from './Components/ui/MaxWidth';
import MessagesWithTag from './Components/Messages/Tags/MessagesWithTag';

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
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/profile" component={Profile} />
                <Route path="/messages/:tag" component={MessagesWithTag} />
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
