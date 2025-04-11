import EventTimeline from '@/components/shared/events/event-timeline';
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
