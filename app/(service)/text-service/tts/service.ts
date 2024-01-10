import axios from 'axios';

const getAudioFile = async (text: string) => {
  const res = await axios.get(
    `http://10.82.82.100:2008/api/tts?text=${text}&voice=fa/haaniye_low&noiseScale=0.667&noiseW=0.8&lengthScale=1&ssml=false&audioTarget=client`,
    { responseType: 'blob' }
  );
  return res.data;
};
export default getAudioFile;
