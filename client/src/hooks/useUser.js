import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';

function useUser() {
  const { data } = useContext(AuthContext);

  return { user: data.user };
}

export default useUser;
