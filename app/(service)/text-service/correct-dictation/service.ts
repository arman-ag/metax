import axios from 'axios';

const getCorrectDictation = async (formData) => {
  const res = await axios.post('http://10.82.82.100:2001/chat', formData);
  return res.data;
};
export { getCorrectDictation };
