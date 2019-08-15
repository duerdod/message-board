import React, { createContext } from 'react';
import { useAsync } from 'react-async';
import getUser from '../utils/getUser';
import StatusPage from '../Components/StatusPage';

const UserContext = createContext();

// To simple ... ? If not cached always return a fullpagespinner while fetching user.
const UserContextProvider = ({ children }) => {
  const { data = { user: null }, isPending, isRejected } = useAsync({
    promiseFn: getUser
  });
  //,reload

  if (isPending) {
    return <StatusPage state={isPending && 'loading'} />;
  }
  if (isRejected) {
    return <StatusPage state={isRejected && 'error'} />;
  }

  const { user } = data;
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
