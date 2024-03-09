import axios from 'axios';
const imageService = process.env.imageService;

const getEmotionDetection = async (formData) => {
  const res = await axios.post(
    `${imageService}/metax/image/recognition/v1/emotion-detection/`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return res;
};

export { getEmotionDetection };
