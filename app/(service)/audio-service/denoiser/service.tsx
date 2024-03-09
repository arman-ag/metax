import axios from 'axios';
const voiceService = process.env.voiceService;
const callDenoiseService = async (path) => {
  const res = await axios.post(
    'http://172.16.60.111:8004/metax/voice/assistant/v1/denoise/denoiser/',
    path
  );
  return res.data;
};

const getHighDenoiseResult = async (celeryTaskId) => {
  const res = await axios.post(
    'http://172.16.60.111:8004/metax/voice/assistant/v1/results/denoiser/',
    celeryTaskId
  );
  return res.data;
};
const getDownloadFileLink = async (formData) => {
  const res = await axios.post(
    'http://172.16.60.111:8004/metax/voice/assistant/v1/results/denoiser/',
    formData,
    {
      responseType: 'blob',
    }
  );
  return res.data;
};
export { callDenoiseService, getDownloadFileLink, getHighDenoiseResult };
