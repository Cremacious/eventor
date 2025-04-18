import { Button } from '@/components/ui/button';
import FindFriendForm from './find-friend-form';
import Image from 'next/image';
import image from '@/public/images/stock.jpg';

const FriendsPage = () => {
  return (
    <div>
      <FindFriendForm />
      <div className="p-8">
        <h1 className="text-center textCyan text-bold text-2xl mb-4">
          Friends List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-8 backgroundCyan rounded-2xl shadow-2xl">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={image}
              alt="Friend Image"
              height={50}
              width={50}
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Friend Name Here
            </h1>
            <div className="flex mt-3 -mx-2">
              <Button className="backgroundDark text-white">Invite</Button>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 backgroundCyan rounded-2xl shadow-2xl">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={image}
              alt="Friend Image"
              height={50}
              width={50}
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Friend Name Here
            </h1>
            <div className="flex mt-3 -mx-2">
              <Button className="backgroundGray text-white">Invite</Button>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 backgroundCyan rounded-2xl shadow-2xl">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={image}
              alt="Friend Image"
              height={50}
              width={50}
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Friend Name Here
            </h1>
            <div className="flex mt-3 -mx-2">
              <Button className="backgroundDark text-white">Invite</Button>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 backgroundCyan rounded-2xl shadow-2xl">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={image}
              alt="Friend Image"
              height={50}
              width={50}
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Friend Name Here
            </h1>
            <div className="flex mt-3 -mx-2">
              <Button className="backgroundDark text-white">Invite</Button>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 backgroundCyan rounded-2xl shadow-2xl">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={image}
              alt="Friend Image"
              height={50}
              width={50}
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Friend Name Here
            </h1>
            <div className="flex mt-3 -mx-2">
              <Button className="backgroundDark text-white">Invite</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
