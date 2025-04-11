import { getUserById } from '@/lib/actions/user.actions';
import Image from 'next/image';
import image from '@/public/images/stock.jpg';
import { Button } from '@/components/ui/button';
const UserPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const user = await getUserById(id);

  if (!user) return <div>User not found</div>;

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            height={500}
            width={500}
            src={image}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium textCyan">
              {user.displayName}'s Events
            </h1>
            <Button>Add As Friend</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserPage;
