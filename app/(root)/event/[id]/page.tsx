import { getEventById } from '@/lib/actions/event.actions';

const EventDetailsPAge = async ({
  params,
}: {
  params: { eventId: string };
}) => {
  const eventId = params.eventId;
  const event = await getEventById(eventId);
  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-600">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="my-4">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded-4xl"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
      <div className="flex mx-auto justify-center items-center">
        <div className="text-gray-600 body-font overflow-hidden w-4/5 md:w-1/2">
          <div className="p-8 backgroundGray rounded-2xl shadow-lg">
            <div className="">
              <h1 className="textCyan text-center text-3xl title-font font-medium mb-4">
                {event.name}
              </h1>
            </div>

            <div className="flex mb-4">
              <a className="flex-grow textCyan border-b-2 border-cyan-300 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p className="text-white leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="textCyan">Date</span>
              <span className="ml-auto text-white">December 18th, 2024</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="textCyan">Visibility</span>
              <span className="ml-auto text-white">Friends Only</span>
            </div>
            <div className="flex">
              <button className="flex ml-auto mt-2 text-white backgroundCyan py-2 px-6  hover:bg-cyan-200 rounded">
                RSVP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPAge;
