import axios from 'axios';
const galleryUrl = process.env.galleryUrl;

const getGalleryVoice = async () => {
  const res = await axios.get(`${galleryUrl}/metax/gallery/v1/voice/`);
  return res.data;
};
const UploadVoice = async (formData) => {
  const { data } = await axios.post(
    `${galleryUrl}/metax/gallery/v1/voice/`,
    formData
  );
  return data;
};
const updateVoice = async (id: number, formData) => {
  const res = await axios.put(
    `${galleryUrl}/metax/gallery/v1/voice/${id}/`,
    formData
  );
  return res;
};
const deleteVoiceFile = async (id: string) => {
  const res = await axios.delete(`${galleryUrl}/metax/gallery/v1/voice/${id}/`);
  return res;
};
////////////image/////////////////
const getGalleryImage = async () => {
  const res = await axios.get(`${galleryUrl}/metax/gallery/v1/image/`);
  return res.data;
};
const updateImage = async (id: number, formData) => {
  const res = await axios.put(
    `${galleryUrl}/metax/gallery/v1/image/${id}/`,
    formData
  );
  return res;
};
const UploadImage = async (formData) => {
  const { data } = await axios.post(
    `${galleryUrl}/metax/gallery/v1/image/`,
    formData
  );
  return data;
};
const deleteImageFile = async (id: string) => {
  const res = await axios.delete(`${galleryUrl}/metax/gallery/v1/
image/${id}/`);
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
