import axios from 'axios';
const getGalleryVoice = async () => {
  const res = await axios.get('http://172.16.60.151:8003/gallery/voice/');
  return res.data;
};
const UploadVoice = async (formData) => {
  const { data } = await axios.post(
    'http://172.16.60.151:8003/gallery/voice/',
    formData
  );
  return data;
};
const updateVoice = async (id: number, formData) => {
  const res = await axios.put(
    `http://172.16.60.151:8003/gallery/voice/${id}/`,
    formData
  );
  return res;
};
const deleteVoiceFile = async (id: string) => {
  const res = await axios.delete(
    `http://172.16.60.151:8003/gallery/voice/${id}/`
  );
  return res;
};
////////////image/////////////////
const getGalleryImage = async () => {
  const res = await axios.get('http://172.16.60.151:8003/gallery/image/');
  return res.data;
};
const updateImage = async (id: number, formData) => {
  const res = await axios.put(
    `http://172.16.60.151:8003/gallery/image/${id}/`,
    formData
  );
  return res;
};
const UploadImage = async (formData) => {
  const { data } = await axios.post(
    'http://172.16.60.151:8003/gallery/image/',
    formData
  );
  return data;
};
const deleteImageFile = async (id: string) => {
  const res = await axios.delete(
    `http://172.16.60.151:8003/gallery/image/${id}/`
  );
  return res;
};
export {
  UploadImage,
  UploadVoice,
  deleteImageFile,
  deleteVoiceFile,
  getGalleryImage,
  getGalleryVoice,
  updateImage,
  updateVoice,
};
