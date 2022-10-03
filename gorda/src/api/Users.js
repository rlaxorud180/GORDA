import axios from "axios";
import { apiInstance } from "./Index";

const api = apiInstance();

export async function signIn(user, success, fail) {
  await api.post(`api/user/login`, user).then(success).catch(fail);
}

export const getUserInfo = async (data, success, fail) => {
  return await api.get(`api/user/${data}`).then(success).catch(fail);
};
