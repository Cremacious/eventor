import CreateUserForm from './create-user-form';
import UserCreator from '@/components/user-creator';

const CreateAccountPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="backgroundGray p-8 rounded-2xl shadow-lg flex flex-col">
        <CreateUserForm />
      <UserCreator />
      </div>
    </div>
  );
};

export default CreateAccountPage;
