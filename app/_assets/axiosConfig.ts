import { getSession } from 'next-auth/react';

const configureHeader = async () => {
  const {
    user: { accessToken },
  } = await getSession();

  return {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
};
export default configureHeader;
