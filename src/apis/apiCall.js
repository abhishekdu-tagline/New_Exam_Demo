import axios from "axios";

const token = localStorage.getItem("jwt");
console.log(token);

const examHeaders = {
  "Content-Type": "application/json",
  "access-token": token,
};

//// postRequest
export const postRequest = (baseUrl, data, header) => {
  const res = axios.post(baseUrl, data, { headers: header });
  return res;
};

//// getRequest
export const getRequest = (baseUrl) => {
  const res = axios.get(baseUrl, { headers: examHeaders });
  return res;
};

/// delete request
export const deleteRequest = (deleteUrl) => {
  const res = axios.delete(deleteUrl, { headers: examHeaders });
  return res;
};

/// Put request
export const putRequest = (putUrl, data) => {
  const res = axios.put(putUrl, data, { headers: examHeaders });
  return res;
};

export const giveExam = (baseUrl, data) => {
  const res = axios.post(baseUrl, data, { headers: examHeaders });
  return res;
};
//// axios API call Function
export const resetPassword = (baseUrl, data, examHeaders) => {
  const res = axios.post(baseUrl, data, { headers: examHeaders });
  return res;
};

export const apiCall = (config) => {
  const res = axios(config);
  return res;
};
