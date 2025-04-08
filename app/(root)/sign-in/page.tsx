import { SignIn } from '@clerk/nextjs';


const SignInPage = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="border-4 rounded-lg border-cyan-300">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
