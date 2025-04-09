import AllEventsCard from '@/components/shared/events/all-events';
import { Input } from '@/components/ui/input';

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
        <section className="text-gray-600 body-font">
          <h2 className="text-center text-white text-2xl">
            All Upcoming Events
          </h2>
          <div className="container px-5 py-10 mx-auto flex flex-wrap">
            {/* Full Card */}
            <div className="flex relative py-4 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-medium text-sm"></div>
              <div className="bg-white rounded-2xl ml-4 flex-grow md:p-4 p-3 flex sm:items-center items-start flex-col sm:flex-row hover:scale-105 transition-transform cursor-pointer">
                <div className="flex-shrink-0 w-24 h-24 bg-cyan-800 text-green-500 rounded-full inline-flex items-center justify-center">
                  {' '}
                  Image here
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg> */}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Name Here
                  </h2>
                  <p className="leading-relaxed">Date here</p>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative py-4 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-medium text-sm"></div>
              <div className="bg-white rounded-2xl ml-4 flex-grow md:p-4 p-3 flex sm:items-center items-start flex-col sm:flex-row hover:scale-105 transition-transform cursor-pointer">
                <div className="flex-shrink-0 w-24 h-24 bg-cyan-800 text-green-500 rounded-full inline-flex items-center justify-center">
                  {' '}
                  Image here
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg> */}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Name Here
                  </h2>
                  <p className="leading-relaxed">Date here</p>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative py-4 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-medium text-sm"></div>
              <div className="bg-white rounded-2xl ml-4 flex-grow md:p-4 p-3 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-cyan-800 text-green-500 rounded-full inline-flex items-center justify-center">
                  {' '}
                  Image here
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg> */}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Name Here
                  </h2>
                  <p className="leading-relaxed">Date here</p>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative py-4 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-medium text-sm"></div>
              <div className="bg-white rounded-2xl ml-4 flex-grow md:p-4 p-3 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-cyan-800 text-green-500 rounded-full inline-flex items-center justify-center">
                  {' '}
                  Image here
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg> */}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Name Here
                  </h2>
                  <p className="leading-relaxed">Date here</p>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <h2 className="text-center text-white text-2xl">My Recent Events</h2>
          <div className="container px-5 py-10 mx-auto flex flex-wrap">
            {/* Full Card */}
            <div className="flex relative py-4 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-medium text-sm"></div>
              <div className="bg-white rounded-2xl ml-4 flex-grow md:p-4 p-3 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-cyan-800 text-green-500 rounded-full inline-flex items-center justify-center">
                  {' '}
                  Image here
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg> */}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Name Here
                  </h2>
                  <p className="leading-relaxed">Date here</p>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative py-4 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-medium text-sm"></div>
              <div className="bg-white rounded-2xl ml-4 flex-grow md:p-4 p-3 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-cyan-800 text-green-500 rounded-full inline-flex items-center justify-center">
                  {' '}
                  Image here
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg> */}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Name Here
                  </h2>
                  <p className="leading-relaxed">Date here</p>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative py-4 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-medium text-sm"></div>
              <div className="bg-white rounded-2xl ml-4 flex-grow md:p-4 p-3 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-cyan-800 text-green-500 rounded-full inline-flex items-center justify-center">
                  {' '}
                  Image here
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg> */}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Name Here
                  </h2>
                  <p className="leading-relaxed">Date here</p>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative py-4 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-medium text-sm"></div>
              <div className="bg-white rounded-2xl ml-4 flex-grow md:p-4 p-3 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-cyan-800 text-green-500 rounded-full inline-flex items-center justify-center">
                  {' '}
                  Image here
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg> */}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Name Here
                  </h2>
                  <p className="leading-relaxed">Date here</p>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
