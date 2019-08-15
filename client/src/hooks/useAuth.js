import { useContext } from 'react';
import { UserContext } from '../context/user-context';

function useAuth() {
  const { user, login } = useContext(UserContext);
  return { user, login };
}

export default useAuth;
