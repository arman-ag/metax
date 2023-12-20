'use client';

import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();
  console.log(session);
  return <div>home</div>;
};

export default Home;
