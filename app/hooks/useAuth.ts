const baseUrl = process.env.baseUrl;

const useAuth = async (enteryData) => {
  const json = await JSON.stringify(enteryData);
  const res = await fetch(`${baseUrl}/metax/auth/v1/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: json,
    redirect: 'follow',
  });
  return res;
};
export default useAuth;