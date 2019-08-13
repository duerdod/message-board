import React from 'react';
import { MessageFormProvider } from './message-context';
import { AppContextProvider } from './app-context';

const AppStateProvider = props => (
  <AppContextProvider>
    <MessageFormProvider>{props.children}</MessageFormProvider>
  </AppContextProvider>
);

export default AppStateProvider;
