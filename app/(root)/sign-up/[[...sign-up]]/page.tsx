import { SignUp } from '@clerk/nextjs';
import logo from '@/public/logo.png';
import Image from 'next/image';

const SignUpPage = () => {
  return (
    <div className="flex px-6 justify-center items-center min-h-screen">
      <div className="backgroundGray rounded-lg p-2 md:p-8 flex flex-col items-center">
        <Image
          src={logo}
          height={250}
          width={250}
          alt="Logo"
          className="mb-4"
        />
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
