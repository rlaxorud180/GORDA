import apiInstance from "./Index";

const api = apiInstance();

export async function postMyDonation(response, success, fail) {
    await api.post(`api/my_donation/regist`, response).then(success).catch(fail);
}