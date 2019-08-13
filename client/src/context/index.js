import React from 'react';
import { MessageFormProvider } from './message-context';
import { AppContextProvider } from './app-context';

const AppStateProvider = ({ children }) => (
  <AppContextProvider>
    <MessageFormProvider>{children}</MessageFormProvider>
  </AppContextProvider>
);

export default AppStateProvider;
