import axios from "axios";

const base_URL = "http://localhost:8080/";
// const base_URL = "http://13.125.86.134:8080/";

export function apiInstance() {
  const instace = axios.create({
    baseURL: base_URL,
  });
  return instace;
}
