import { getCurrentUserId, getFriends } from '@/lib/actions/user.actions';

const FriendsList = async () => {
  const userId = await getCurrentUserId();
  const friends = await getFriends(userId);
  if (!friends) return <div>No friends found</div>;

  return (
    <>
      {friends.map((friend) => (
        <div key={friend.id}>{friend.displayName}</div>
      ))}
    </>
  );
};

export default FriendsList;
