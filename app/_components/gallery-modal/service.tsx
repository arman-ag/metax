import axios from 'axios';
const getGalleryVoice = async () => {
  const res = await axios.get('http://172.16.60.151:8001/gallery/voice/');
  return res.data;
};
const UploadVoice = async (formData) => {
  const { data } = await axios.post(
    'http://172.16.60.151:8001/gallery/voice/',
    formData
  );
  return data;
};
const updateVoice = async (id: number, newFileName: string) => {
  const res = await axios.put(
    `http://172.16.60.151:8001/gallery/voice/${id}/`,
    {
      file_name: newFileName,
    }
  );
  return res;
};
const deleteVoiceFile = async (id: string) => {
  const res = await axios.delete(
    `http://172.16.60.151:8001/gallery/voice/${id}/`
  );
  return res;
};
export { UploadVoice, deleteVoiceFile, getGalleryVoice, updateVoice };
