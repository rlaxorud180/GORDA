import { apiInstance } from './Index';
import axios from 'axios';

const api = apiInstance();

export const getAllFoundation = async (data, success, fail) => {
    console.log(JSON.stringify(data));
    await api.get("api/foundation")
}