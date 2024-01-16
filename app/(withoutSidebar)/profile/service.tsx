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
  return axios.put(
    `${baseUrl}/accounts/user/update-detail/`,
    userDetail,
    await configureHeader()
  );
};

const postNewPassword = async (passwords: passwordType) => {
  return axios.put(
    `${baseUrl}/accounts/user/change-current-password/`,
    passwords,
    await configureHeader()
  );
};
const getUserDetail = async () => {
  const service = await axios.get(
    `${baseUrl}/accounts/user/detail/`,
    await configureHeader()
  );
  return service.data;
};

const convertImageLinkToFile = async (url: string) => {
  const response = await axios.get(url, { responseType: 'blob' });
  console.log('File created successfully:', response);
  const blob = response.data;
  const file = new File([blob], 'image.jpg', { type: blob.type });
  return file;
};

export {
  convertImageLinkToFile,
  getUserDetail,
  postNewPassword,
  posteUserDetail,
};
