import axios from 'axios';

const callDenoiseService = async (path) => {
  const res = await axios.post(
    'http://172.16.60.151:8003/denoise/high-denoise/',
    path
  );
  return res.data;
};
const getHighDenoiseResult = async (celeryTaskId) => {
  const res = await axios.post(
    'http://172.16.60.151:8003/results/get-high-denoise/',
    celeryTaskId
  );
  return res.data;
};
const getDownloadFileLink = async (formData) => {
  const res = await axios.post(
    'http://172.16.60.151:8003/results/download-file/',
    formData,
    {
      responseType: 'blob',
    }
  );
  return res.data;
};
export { callDenoiseService, getDownloadFileLink, getHighDenoiseResult };
