import axios from 'axios';
const imageService = process.env.imageService;

const getAgeDetection = async (formData) => {
  const res = await axios.post(
    `${imageService}/v1/image/age-detection/`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return res;
};

export { getAgeDetection };
