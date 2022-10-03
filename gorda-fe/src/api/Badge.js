import { apiInstance } from './Index';

const api = apiInstance();

export const getBadge = async (success, fail) => {
    return await api.get(`api/badge`).then(success).catch(fail);
};
  
export const getMyBadge = async (data, success, fail) => {
    return await api.get(`api/badge/${data}`).then(success).catch(fail);
};

export const postMyBadge = async(data, success, fail) => {
    await api.post(`api/my_badge/regist`, data).then(success).catch(fail);
  }