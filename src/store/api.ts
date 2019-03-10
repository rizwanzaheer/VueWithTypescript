import axios from 'axios';
import { UserSubmit, UserResponse, User } from './models';
//tslint:disable
export const conduitApi = axios.create({
  baseURL: "https://conduit.productionready.io/api"
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" }
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.common.Authorization = `Token ${jwt}`;
}

export function clearJWT() {
  delete conduitApi.defaults.headers.common.Authorization;
}

export async function loginUser(user: UserSubmit): Promise<User | undefined> {
  try {
    const response = await axios.post("/users/login", { user });
    return (response.data as UserResponse).user;
  } catch (e) {
    console.log("login user error is: ", e);
  }
}
