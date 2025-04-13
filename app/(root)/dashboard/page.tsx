import { Button } from '@/components/ui/button';
import EventTimeline from '@/components/shared/events/event-timeline';
import FriendsList from '@/components/shared/friends/friends-list';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div className="newScreen">
      <div className="flex justify-center mb-8">
        <div className="flex-col w-1/2">
          <h2 className="text-2xl text-center mb-4 text-white">
            Search Events
          </h2>
          <Link href="/dashboard/user/48d27116-5f32-4faf-ad92-1706e23ba835">
            <Button>Go to Account 2</Button>
          </Link>
          <Link href="/dashboard/user/b847bfc0-9f75-48ea-bc19-778cad90614a">
            <Button>Go to Chris is cool</Button>
          </Link>
          <FriendsList />
          <Input
            className="text-center text-white"
            placeholder="Event name..."
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <EventTimeline />
        <EventTimeline />
      </div>
    </div>
  );
};

export default DashboardPage;
