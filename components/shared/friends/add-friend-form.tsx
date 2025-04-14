'use client'

import { getCurrentUserId, getFriends } from '@/lib/actions/user.actions';

import { Button } from '@/components/ui/button';

const AddFriendForm = async () => {
  const userId = await getCurrentUserId();
  const friends = await getFriends(userId);
  if (!friends) return <div>No friends found</div>;

  return (
    <> Invite friends
      {friends.map((friend) => (
        <div>
          {friend.displayName}
          <Button>Invite Friend</Button>
        </div>
      ))}
    </>
  );
};

export default AddFriendForm;


