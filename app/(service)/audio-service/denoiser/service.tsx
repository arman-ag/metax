import axios from 'axios';
const voiceService = process.env.voiceService;
const callDenoiseService = async (path) => {
  const res = await axios.post(
    `${voiceService}/metax/voice/assistant/v1/denoise/denoiser/`,
    path
  );
  return res.data;
};

const getHighDenoiseResult = async (celeryTaskId) => {
  const res = await axios.post(
    `${voiceService}/metax/voice/assistant/v1/results/get-denoiser/`,
    celeryTaskId
  );
  return res.data;
};
const getDownloadFileLink = async (formData) => {
  const res = await axios.post(
    `${voiceService}/metax/voice/assistant/v1/results/download-file/`,
    formData,
    {
      responseType: 'blob',
    }
  );
  return res.data;
};
export { callDenoiseService, getDownloadFileLink, getHighDenoiseResult };
