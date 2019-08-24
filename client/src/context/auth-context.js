import React, { createContext } from 'react';
import { useAsync } from 'react-async';
import getUser from '../utils/getUser';
import StatusPage from '../Components/StatusPage';

const AuthContext = createContext();

// To simple ... ? Returns a fullpagespinner on first load.
const AuthContextProvider = ({ children }) => {
  const { data, isPending, isRejected, reload } = useAsync({
    promiseFn: getUser
  });

  if (isPending) {
    return <StatusPage state={isPending && 'loading'} />;
  }
  if (isRejected) {
    return <StatusPage state={isRejected && 'error'} />;
  }
  // Passes reload for usage in auth fn.
  // TODO: Place auth mutations in custom hook. And use reload "by default".
  return (
    <AuthContext.Provider value={{ data, reload }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
