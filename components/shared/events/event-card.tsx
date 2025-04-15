import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { Event } from '@/lib/types/index';
import Image from 'next/image';
import Link from 'next/link';
import image from '@/public/images/stock.jpg';

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div key={event.id} className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />
      {/* Content */}
      <Link href={`/event/${event.id}`}>
        <div className="space-y-3 p-4 rounded-2xl bg-white animationEffect">
          <div>
            <h3 className="text-lg sm:text-xl text-slate-800 font-medium">
              {event.name}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-sm">
              <Calendar className="h-4 w-4 text-slate-800" />
              <span className="text-slate-800">{event.date}</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-slate-800">
            {event.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full">
              tch
            </Badge>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
