const EventDetailsPAge = () => {
  return (
    <div>
      <div className="min-h-screen flex mx-auto justify-center items-center">
        <section className="text-gray-600 body-font overflow-hidden w-4/5 md:w-1/2">
          <div className="p-8 backgroundGray rounded-2xl shadow-lg">
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
        </section>
      </div>
    </div>
  );
};

export default EventDetailsPAge;
