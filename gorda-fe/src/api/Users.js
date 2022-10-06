import axios from "axios";
import apiInstance from "./Index";

const api = apiInstance();

export async function signIn(user, success, fail) {
  await api.post(`api/user/login`, user).then(success).catch(fail);
}

export const getUserInfo = async (response, success, fail) => {
  return await api
    .get(`api/user/${response.userIdx}`)
    .then(success)
    .catch(fail);
};
