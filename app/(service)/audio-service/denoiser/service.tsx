import axios from 'axios';

const callDenoiseService = async (path) => {
  console.log(path);
  const res = await axios.post(
    'http://172.16.60.151:8002/denoise/high-denoise/',
    path
  );
  return res;
};
const getHighDenoiseResult = async () => {
  const res = await axios.get(
    'http://172.16.60.151:8002/results/high-denoise/'
  );
  return res.data.results;
};
const getDownloadFileLink = async (formData) => {
  const res = await axios.post(
    'http://172.16.60.151:8002/results/download-file/',
    formData,
    {
      responseType: 'blob',
    }
  );
  return res.data;
};
export { callDenoiseService, getDownloadFileLink, getHighDenoiseResult };
