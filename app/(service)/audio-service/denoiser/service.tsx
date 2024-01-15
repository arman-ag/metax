import axios from 'axios';

const callDenoiseService = async (path) => {
  console.log(path);
  const res = await axios.post(
    'http://172.16.60.151:8004/denoise/high-denoise/',
    path
  );
  return res.data;
};
const getHighDenoiseResult = async (celeryTaskId) => {
  const res = await axios.post(
    'http://172.16.60.151:8004/results/get-high-denoise/',
    celeryTaskId
  );
  return res.data;
};
const getDownloadFileLink = async (formData) => {
  const res = await axios.post(
    'http://172.16.60.151:8004/results/download-file/',
    formData,
    {
      responseType: 'blob',
    }
  );
  return res.data;
};
export { callDenoiseService, getDownloadFileLink, getHighDenoiseResult };
