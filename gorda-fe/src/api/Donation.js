import { apiInstance } from './Index';
import axios from 'axios';

const api = apiInstance();

export const getDonationByIdx = async (response, success, fail) => {
    await api.get(`api/donation/${response.donationIdx}`).then(success).catch(fail);
}