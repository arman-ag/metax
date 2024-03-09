import axios from 'axios';

const CallTTI = async (formData) => {
  const res = await axios.post(
    'http://172.16.60.111:8006/metax/image/text-to-image/v1/tti/process/',
    formData
  );
  return res.data;
};
export { CallTTI };
