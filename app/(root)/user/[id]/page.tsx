import { getUserById } from '@/lib/actions/user.actions';

const UserPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const user = getUserById(id);

  if (!user) return <div>User not found</div>;
  
  return (
    <>
      <h1>User Page: </h1>
      
    </>
  );
};

export default UserPage;
