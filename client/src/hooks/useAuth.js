import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';

const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};

export default useAuth;
