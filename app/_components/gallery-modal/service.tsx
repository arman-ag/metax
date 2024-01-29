import axios from 'axios';
const getGalleryVoice = async () => {
  const res = await axios.get('http://10.82.82.75:8002/gallery/voice/');
  return res.data;
};
const UploadVoice = async (formData) => {
  const { data } = await axios.post(
    'http://10.82.82.75:8002/gallery/voice/',
    formData
  );
  return data;
};
const updateVoice = async (id: number, formData) => {
  const res = await axios.put(
    `http://10.82.82.75:8002/gallery/voice/${id}/`,
    formData
  );
  return res;
};
const deleteVoiceFile = async (id: string) => {
  const res = await axios.delete(
    `http://10.82.82.75:8002/gallery/voice/${id}/`
  );
  return res;
};
export { UploadVoice, deleteVoiceFile, getGalleryVoice, updateVoice };
