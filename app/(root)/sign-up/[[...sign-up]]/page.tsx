import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="border-4 rounded-lg border-cyan-300">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
