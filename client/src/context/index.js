import React from 'react';
import { MessageFormProvider } from './message-context';
import { AppContextProvider } from './app-context';
import { UserContextProvider } from './user-context';

const AppStateProvider = props => (
  <UserContextProvider>
    <AppContextProvider>
      <MessageFormProvider>{props.children}</MessageFormProvider>
    </AppContextProvider>
  </UserContextProvider>
);

export default AppStateProvider;
