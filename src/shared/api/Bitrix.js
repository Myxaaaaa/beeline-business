import axios from "axios";

const bitApi = axios.create({
  baseURL: 'https://b24-2gf2q8.bitrix24.ru/rest/1/svhv8xlhgflle/',
});
  
export const BitApi = {
  postBit: (endpoint, data) => bitApi.post(endpoint, data),
};