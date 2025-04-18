'use client';

import { Input } from '@/components/ui/input';
import { searchFriendSchema } from '@/lib/validators';
import { Friend } from '@/lib/types';

const FindFriendForm = () => {
  return (
    <>
      <div className="backgroundCyan">
        Search By Email
        <Input />
      </div>
    </>
  );
};

export default FindFriendForm;
