import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

// I think there is no point in having this as a context this far up.
const AppContextProvider = ({ children }) => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);

  useEffect(() => {
    // Is this OK? Looks bad.
    const body = document.querySelector('body');
    isMenuOpen
      ? body.classList.add('menu-open')
      : body.classList.remove('menu-open');
  }, [isMenuOpen]);

  return (
    <AppContext.Provider value={{ isMenuOpen, toggleMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
