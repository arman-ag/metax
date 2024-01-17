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
  if (userDetail instanceof FormData) {
    return axios.put(
      `${baseUrl}/accounts/user/update-detail/`,
      userDetail,
      await configureHeader()
    );
  } else {
    return axios.put(
      `${baseUrl}/accounts/user/update-detail/`,
      { ...userDetail },
      await configureHeader()
    );
  }
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
  console.log(url);
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const arayBuffer = response.data;
  console.log('aadcadw', arayBuffer);
  return new File([arayBuffer], 'user_image', { type: '' });
  // const reader = new FileReader();
  // reader.onloadend = () => resolve(reader.result);
  // //  reader.onerror = reject;
  // reader.readAsDataURL(blob);
  // return reader;
};

export {
  convertImageLinkToFile,
  getUserDetail,
  postNewPassword,
  posteUserDetail,
};
