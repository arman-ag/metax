import axios from 'axios';

const insultResult = async (formData) => {
  const res = await axios.post('http://hirax.com:2005/get_text_hate', formData);
  return res.data;
};
export default insultResult;
