import { getCurrentUserId, getFriends } from '@/lib/actions/user.actions';

import CreateEventForm from './create-event-form';

const CreateEventPage = async () => {
  const userId = await getCurrentUserId();
  const friends = await getFriends(userId);

  return (
    <div className="p-8">
      <CreateEventForm friends={friends} />
    </div>
  );
};

export default CreateEventPage;
