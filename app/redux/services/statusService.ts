import axios from 'axios';
const taskManagerUrl = process.env.taskMangerUrl;
const getStatusResult = async () => {
  const { data: response } = await axios.get(
    `${taskManagerUrl}/metax/voice/assistant/v1/tasks/task-manager/`
  );
  return response;
};
export { getStatusResult };
