import { GET_CURRENT_USER } from '../gql/gql';
import { client } from '../index';
import { getUserToken } from './utils';

const cookieName = 'userToken=';

async function getToken() {
  // So this feels shady.
  let token = getUserToken(cookieName);
  if (!token) {
    return null;
  }
  token = token.trim().replace(cookieName, '');
  return token;
}

async function getUser() {
  // This is because the server sets the cookie after reloading the fetch user inside auth context.
  // This makes sure there is a cookie before fetching user.
  const token = await getToken();
  if (!token) {
    return { user: null };
  }

  const { data } = await client.query({ query: GET_CURRENT_USER });
  if (!data) {
    return { user: null };
  }

  return {
    user: data.currentUser
  };
}

export default getUser;
