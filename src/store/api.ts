import axios from 'axios';

export const conduitApi = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" }
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.common.Authorization = `Token ${jwt}`;
}

export function clearJWT() {
  delete conduitApi.defaults.headers.common.Authorization;
}
