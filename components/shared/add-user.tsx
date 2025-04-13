'use client';

import { Button } from '@/components/ui/button';
import { addFriend } from '@/lib/actions/user.actions';
import { toast } from 'sonner';

const AddUser = ({
  userId,
  friendId,
}: {
  userId: string;
  friendId: string;
}) => {
  const handleSubmit = async () => {
    console.log('Pressed');
    const response = await addFriend(userId, friendId);
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <>
      <Button type="submit" onClick={handleSubmit}>
        Add Friend
      </Button>
    </>
  );
};

export default AddUser;
