import axios from 'axios';
const taskManagerUrl = process.env.taskmanagerUrl;
const getStatusResult = async () => {
  const { data: response } = await axios.get(
    `${taskManagerUrl}/tasks/task-manager/`
  );
  return response;
};
export { getStatusResult };
