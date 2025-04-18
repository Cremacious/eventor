import EventSearch from './event-search';
import { getCurrentUserId } from '@/lib/actions/user.actions';
import { getUserAndFriendEvents } from '@/lib/actions/event.actions';

const EventsPage = async () => {
  const events = await getUserAndFriendEvents();
  const currentUserId = await getCurrentUserId();

  if (!events) {
    return <div>No events found.</div>;
  }
  if (events.length === 0) {
    return <div>No events found.</div>;
  }

  return (
    <>
      <EventSearch currentUserId={currentUserId} events={events} />
    </>
  );
};

export default EventsPage;
