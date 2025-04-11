import DisplayNameForm from './display-name-form';

const DisplayNamePage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="backgroundGray p-8 rounded-2xl shadow-lg flex flex-col">
        <DisplayNameForm />
      </div>
    </div>
  );
};

export default DisplayNamePage;
