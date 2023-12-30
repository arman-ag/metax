import configureHeader from '@/app/_assets/axiosConfig';
import axios from 'axios';
const baseUrl = process.env.baseUrl;
type UserDetailType = {
  first_name: string;
  last_name: string;
  email: string;
  province: string;
};
type passwordType = {
  password: string;
  new_password: string;
  repeat_new_password: string;
};
const posteUserDetail = async (userDetail: UserDetailType) => {
  console.log('baseUrl=>', `${baseUrl}/accounts/dashboard/`);
  return axios.put(
    `${baseUrl}/accounts/dashboard/`,
    userDetail,
    await configureHeader()
  );
};

const postNewPassword = async (passwords: passwordType) => {
  return axios.put(
    `${baseUrl}/accounts/update-password/`,
    passwords,
    await configureHeader()
  );
};
const getUserDetail = async () => {
  const service = await axios.get(
    `${baseUrl}/accounts/dashboard/`,
    await configureHeader()
  );
  return service;
};

const convertImageLinkToFile = async (url: string) => {
  const response = await axios.get(url, { responseType: 'blob' });
  console.log('File created successfully:', response);
  const blob = response.data;
  const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
};

export {
  convertImageLinkToFile,
  getUserDetail,
  postNewPassword,
  posteUserDetail,
};
