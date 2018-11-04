import { call } from './';

async function authenticate() {
  const {
    REACT_APP_AUTH_URL,
    REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET,
  } = process.env;

  const headers = { 'Content-Type': 'application/json; charset=utf-8' };
  const method = 'POST';
  const body = JSON.stringify({
    client_id: REACT_APP_CLIENT_ID,
    client_secret: REACT_APP_CLIENT_SECRET,
  });

  const responseJson = await call({
    url: REACT_APP_AUTH_URL,
    headers,
    method,
    body,
  });

  const { access_token } = responseJson;

  localStorage.setItem('accessToken', access_token);
}

export default authenticate;
