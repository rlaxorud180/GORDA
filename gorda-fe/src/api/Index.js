import axios from "axios";

const base_URL = "http://j7a307.p.ssafy.io:8080/";
// const base_URL = "http://localhost:8080/";

export default function apiInstance() {
  const instance = axios.create({
    baseURL: base_URL,
  });
  return instance;
}
