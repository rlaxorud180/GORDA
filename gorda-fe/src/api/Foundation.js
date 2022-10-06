import apiInstance from "./Index";
import axios from "axios";

const api = apiInstance();

export const getAllFoundation = async (data, success, fail) => {
  console.log(JSON.stringify(data));
  await api.get("api/foundation");
};

export const postFoundation = async(data, success, fail) => {
  await api.post(`api/foundation/regist`, data).then(success).catch(fail);
}