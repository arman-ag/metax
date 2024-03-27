import axios from 'axios';
const taskManagerUrl = process.env.taskMangerUrl;
const getStatusResult = async () => {
  const { data: response } = await axios.get(
    `${taskManagerUrl}/metax/tasks/v1/daily-tasks/`
  );
  return response;
};
export { getStatusResult };
