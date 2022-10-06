import apiInstance from "./Index";
import axios from "axios";

const api = apiInstance();

export const getDonationByIdx = async (response, success, fail) => {
  await api
    .get(`api/donation/${response.donationIdx}`)
    .then(success)
    .catch(fail);
};

export const postDonation = async(response, success, fail) => {
  await api.post(`api/donation/regist`, response).then(success).catch(fail);
}

export const putDonation = async(response, success, fail) => {
  console.log("풋데이터", response);
  await api.put(`api/donation/${response.donationIdx}`, response.donAmount, { headers: { "Content-Type": "application/json" } }).then(success).catch(fail);
}