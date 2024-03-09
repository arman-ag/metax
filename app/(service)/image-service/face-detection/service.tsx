import axios from 'axios';
const imageService = process.env.imageService;

const getFaceDetection = async (formData) => {
  const res = await axios.post(
    `${imageService}/metax/image/recognition/v1/face-detection/`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return res;
};

export { getFaceDetection };
