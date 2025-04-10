import { Event } from '@/lib/types/index';
import Image from 'next/image';
import image from '@/public/images/stock.jpg';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const EventCard = ({ event }: { event: Event }) => {
  return (
    <>
        <div key={event.name} className="relative pl-8 pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />
                  {/* Content */}
                  <div className="space-y-3 p-4 rounded-2xl bg-white animationEffect">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{event.name}</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                    
                        <Badge
                          variant="secondary"
                          className="rounded-full"
                        >
                          tch
                        </Badge>
                  
                    </div>
                  </div>
                </div>
    </>
  );
};

export default EventCard;
