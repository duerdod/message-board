import useAuth from '../../hooks/useAuth';

// This is so stupid. Todo...
const Authenticated = ({ children, renderAuth }) => {
  const { user } = useAuth();
  if (!user) return children;
  return renderAuth(user);
};

export default Authenticated;
