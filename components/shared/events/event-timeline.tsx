import { Building2, Calendar } from 'lucide-react';
import { Event } from '@/lib/types/index';
import EventCard from '@/components/shared/events/event-card';
import { getAllUserEvents } from '@/lib/actions/event.actions';



const EventTimeline = async () => {
  const events = await getAllUserEvents();

  return (
    <>
      <div className="max-w-screen-sm mx-auto py-12 md:py-20 px-6">
        <div className="relative ml-3">
          {/* Timeline line */}
          <div className="absolute left-0 top-4 bottom-0 border-l-2" />
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

export default EventTimeline;
