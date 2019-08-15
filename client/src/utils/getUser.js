import { GET_CURRENT_USER } from '../gql/gql';
import { client } from '../index';

async function getUser() {
  const { data } = await client.query({ query: GET_CURRENT_USER });
  if (!data) {
    return { user: null };
  }
  return {
    user: data.currentUser
  };
}

export default getUser;
