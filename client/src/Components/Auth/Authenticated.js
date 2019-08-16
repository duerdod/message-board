import useUser from '../../hooks/useUser';

// This is so stupid. Todo...
const Authenticated = ({ children, renderAuth }) => {
  const { user } = useUser();
  if (!user) return children;
  return renderAuth(user);
};

export default Authenticated;
