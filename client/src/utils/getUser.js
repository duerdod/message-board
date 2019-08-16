import { GET_CURRENT_USER } from '../gql/gql';
import { client } from '../index';

const cookieName = 'userToken=';

async function getToken() {
  // So this is shady.
  let token = document.cookie
    .split(';')
    .find(cookie => cookie.trim().startsWith(cookieName));
  if (!token) {
    return;
  }
  token = token.trim().replace(cookieName, '');
  return token;
}

async function getUser() {
  // This is because the server sets the cookie
  // after reloading the fetch user in auth context.
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
