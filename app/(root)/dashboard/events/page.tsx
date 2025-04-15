import { Event } from '@/lib/types';
import EventCard from '@/components/shared/events/event-card';
import EventTimeline from '@/components/shared/events/event-timeline';
import { getUserAndFriendEvents } from '@/lib/actions/event.actions';

const EventsPage = async () => {
  const events = await getUserAndFriendEvents();

  return <EventTimeline events={events} />;
};

export default EventsPage;
