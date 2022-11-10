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

export async function putUserDonate(response, success, fail) {
  await api.put(`api/user/donate/${response.userIdx}`, {donateAmount: response.donateAmount}).then(success).catch(fail);
}

export async function getUserRanking(success, fail) {
  await api.get(`api/user/ranking`).then(success).catch(fail);
}