import axios from 'axios';

const callLowDenoiseService = async (path) => {
  console.log(path);
  const res = await axios.post(
    'http://172.16.60.111:8004/metax/voice/assistant/v1/denoise/low-denoise/',
    path
  );
  return res.data;
};
const getLowDenoiseResult = async (celeryTaskId) => {
  const res = await axios.post(
    'http://172.16.60.151:8003/results/get-low-denoise/',
    celeryTaskId
  );
  return res.data;
};

export { callLowDenoiseService, getLowDenoiseResult };
