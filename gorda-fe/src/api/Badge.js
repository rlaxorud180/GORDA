import apiInstance from "./Index";

const api = apiInstance();

export const getBadge = async (success, fail) => {
  return await api.get(`api/badge`).then(success).catch(fail);
};

export const getMyBadge = async (data, success, fail) => {
  return await api
    .get(`api/my_badge/user/${data.userIdx}`)
    .then(success)
    .catch(fail);
};

export const postBadge = async (data, success, fail) => {
  await api.post(`api/badge/regist`, data).then(success).catch(fail);
};

export const putMyBadge = async (response, success, fail) => {
  await api
    .put(`api/my_badge/user/${response.userIdx}`)
    .then(success)
    .catch(fail);
};
