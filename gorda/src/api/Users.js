import axios from "axios";
import { apiInstance } from "./Index";

const api = apiInstance();

export async function signIn(user, success, fail) {
    console.log("api/User에서", JSON.stringify(user));
    await api.post(`api/user/login?userAccount=${user.userAccount}`).then(success).catch(fail);
}