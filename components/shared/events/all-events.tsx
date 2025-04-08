'use server';

import { Event } from '@/lib/types/index';
import EventCard from '@/components/shared/events/event-card';
import { getAllUserEvents } from '@/lib/actions/event.actions';

const AllEventsCard = async () => {
  const events = await getAllUserEvents();
  return (
    <>
      <div className="backgroundCyan p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6 font-bold text-lg">
          Your Recent Events
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 justify-evenly">
          {events.length === 0 ? (
            <div className="text-center text-gray-500">No events found.</div>
          ) : (
            events.map((event: Event) => (
              <EventCard key={event.name} event={event} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AllEventsCard;
