import React from 'react';
import { MessageFormProvider } from './message-context';
import { AppContextProvider } from './app-context';
import { AuthContextProvider } from './auth-context';
import { UserContextProvider } from './user-context';

const AppStateProvider = props => (
  <AuthContextProvider>
    <UserContextProvider>
      <AppContextProvider>
        <MessageFormProvider>{props.children}</MessageFormProvider>
      </AppContextProvider>
    </UserContextProvider>
  </AuthContextProvider>
);

export default AppStateProvider;
