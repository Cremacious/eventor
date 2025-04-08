import { Event } from '@/lib/types/index';
import Image from 'next/image';
import image from '@/public/images/stock.jpg';

const EventCard = ({ event }: { event: Event }) => {
  return (
    <>
      <div className="backgroundDark shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-2 w-full max-w-sm rounded-2xl overflow-hidden mx-auto mt-4 hover:scale-105 transition-transform cursor-pointer">
        <div className="aspect-[3/2]">
          <Image
            src={image}
            alt="name"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="p-6">
          <div className="text-lg text-center md:text-2xl text-white font-bold break-words">
            {event.name}
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-base text-md text-white font-bold flex-1">
              {event.date}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
