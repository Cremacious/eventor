import Image from 'next/image';
import { currentUser } from '@clerk/nextjs/server';
import logo from '@/public/logo-bw.png';

const UserCreator = async () => {
  const createdUser = await currentUser();
  console.log(createdUser);
  return <> </>;
};

export default UserCreator;
