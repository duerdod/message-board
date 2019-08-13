import React, { createContext, useState, useEffect } from 'react';
import useMobileView from '../hooks/useMobileView';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const { isLarge } = useMobileView();

  useEffect(() => {
    // Is this OK? Looks bad.
    const body = document.querySelector('body');
    isMenuOpen
      ? body.classList.add('menu-open')
      : body.classList.remove('menu-open');
  }, [isMenuOpen]);

  return (
    <AppContext.Provider value={{ isLarge, isMenuOpen, toggleMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
