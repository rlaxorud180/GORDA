import apiInstance from "./Index"

const api = apiInstance();

export const postCompany = async (response, success, fail) => {
    return await api.post(`api/company/regist`, response).then(success).catch(fail);
}