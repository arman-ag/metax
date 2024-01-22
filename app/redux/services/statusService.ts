import axios from 'axios';

const getStatusResult = async () => {
  const { data: response } = await axios.get(
    'http://172.16.60.151:8003/tasks/task-manager/'
  );
  return response;
};
export { getStatusResult };
