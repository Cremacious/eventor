import { checkUser, getUserDisplayName } from '@/lib/actions/user.actions';

import DisplayNameForm from './display-name-form';
import { redirect } from 'next/navigation';

const CreateNamePage = async () => {
  const session = await checkUser();
  const displayName = await getUserDisplayName();
  if (displayName !== null) {
    redirect('/dashboard');
  }
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="backgroundGray p-8 rounded-2xl shadow-lg flex flex-col">
          <DisplayNameForm />
        </div>
      </div>
    </>
  );
};

export default CreateNamePage;
