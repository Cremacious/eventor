import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import screenshot from '@/public/images/screenshot.png';

const Homepage = () => {
  return (
    <>
      <div className="backgroundGray p-8 my-4 mx-5 rounded-2xl shadow-lg">
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 max-w-5xl max-md:max-w-md mx-auto">
          <div className="max-md:order-1 max-md:text-center">
            <h2 className="md:text-4xl text-3xl md:leading-10 font-bold textCyan mb-4">
              Welcome to Eventor
            </h2>
            <p className="mt-4 text-base text-white leading-relaxed">
              Our user-friendly interface and powerful features make it easy to
              manage every aspect of your event, from invitations to RSVPs and
              everything in between.
            </p>
            <div className="mt-10 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
              <Link
                href="/sign-up"
                className="px-6 py-3 text-base font-semibold text-white backgroundCyan rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="px-6 py-3 text-base font-semibold textCyan border border-[#3bcccd] rounded-full hover:text-white hover:bg-[#3bcccd] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#3bcccd] focus:outline-none focus:ring-opacity-50"
              >
                Sign In
              </Link>
            </div>
          </div>
          <div className="md:h-[450px]">
            <Image
              src={screenshot}
              className="w-full h-full object-cover rounded-lg shadow-xl"
              alt="Dining Experience"
            />
          </div>
        </div>
        {/* Custom */}
        {/* <div className="backgroundGray flex mt-4 max-lg:flex-col px-4 py-8 gap-12 max-w-[1400px] mx-auto">
          <div>
            <h2 className="text-white text-4xl font-bold mb-6">
              Eventor's Features
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
              officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
              tempor ut reprehenderit. Eu eu quis anim aute.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-md:max-w-lg mx-auto">
            <div className="text-left backgroundCyan rounded-lg shadow p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-blue-600 w-12 inline-block bg-white p-3 rounded-full"
                viewBox="0 0 32 32"
              >
                <path
                  d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                  data-original="#000000"
                />
                <path
                  d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                  data-original="#000000"
                />
              </svg>
              <h3 className="text-slate-900 text-lg font-semibold mt-6 mb-3">
                Create
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
                officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem
                ad tempor ut reprehenderit.
              </p>
              <button
                type="button"
                className="text-slate-900 border border-gray-300 px-4 py-2 rounded-lg font-semibold flex items-center text-sm mt-6 hover:bg-white"
              >
                Learn more{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  className="rotate-90 ml-1.5"
                >
                  <path
                    fill="#333"
                    d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  />
                </svg>
              </button>
            </div>
            <div className="text-left backgroundCyan rounded-lg shadow p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 inline-block bg-white p-3 rounded-full"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g
                  fill="none"
                  className="stroke-blue-600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                  clipPath="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                    data-original="#000000"
                  />
                  <path
                    d="M178 271.894 233.894 216 334 316.105"
                    data-original="#000000"
                  />
                </g>
              </svg>
              <h3 className="text-slate-900 text-lg font-semibold mt-6 mb-3">
                Invite
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
                officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem
                ad tempor ut reprehenderit.
              </p>
              <button
                type="button"
                className="text-slate-900 border border-gray-300 px-4 py-2 rounded-lg font-semibold flex items-center text-sm mt-6 hover:bg-white"
              >
                Learn more{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  className="rotate-90 ml-1.5"
                >
                  <path
                    fill="#333"
                    d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  />
                </svg>
              </button>
            </div>
            <div className="text-left backgroundCyan rounded-lg shadow p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-blue-600 w-12 inline-block bg-white p-3 rounded-full"
                viewBox="0 0 512.001 512.001"
              >
                <path
                  d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                  data-original="#000000"
                />
              </svg>
              <h3 className="text-slate-900 text-lg font-semibold mt-6 mb-3">
                Share
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
                officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem
                ad tempor ut reprehenderit.
              </p>
              <button
                type="button"
                className="text-slate-900 border border-gray-300 px-4 py-2 rounded-lg font-semibold flex items-center text-sm mt-6 hover:bg-white"
              >
                Learn more{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  className="rotate-90 ml-1.5"
                >
                  <path
                    fill="#333"
                    d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  />
                </svg>
              </button>
            </div>
            <div className="text-left backgroundCyan rounded-lg shadow p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-blue-600 w-12 inline-block bg-white p-3 rounded-full"
                viewBox="0 0 24 24"
              >
                <g fillRule="evenodd" clipRule="evenodd">
                  <path
                    d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                    data-original="#000000"
                  />
                  <path
                    d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                    data-original="#000000"
                  />
                  <path
                    d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                    data-original="#000000"
                  />
                </g>
              </svg>
              <h3 className="text-slate-900 text-lg font-semibold mt-6 mb-3">
                Organize
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
                officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem
                ad tempor ut reprehenderit.
              </p>
              <button
                type="button"
                className="text-slate-900 border border-gray-300 px-4 py-2 rounded-lg font-semibold flex items-center text-sm mt-6 hover:bg-white"
              >
                Learn more{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  className="rotate-90 ml-1.5"
                >
                  <path
                    fill="#333"
                    d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div> */}

        <div className="relative isolate overflow-hidden backgroundGray px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base/7 font-semibold textCyan">
                    Create faster
                  </p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                    A better way to plan your events
                  </h1>
                  <p className="mt-6 text-xl/8 text-white">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                    sem. At arcu, sit dui mi, nibh dui, diam eget aliquam.
                    Quisque id at vitae feugiat egestas.
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <Image
                alt=""
                src={screenshot}
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-white lg:max-w-lg">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      {/* <CloudArrowUpIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600"
                      /> */}
                      <span>
                        <strong className="font-semibold textCyan">
                          Text Here.
                        </strong>{' '}
                        <p className="text-white">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione.
                        </p>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      {/* <CloudArrowUpIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600"
                      /> */}
                      <span>
                        <strong className="font-semibold textCyan">
                          Text Here.
                        </strong>{' '}
                        <p className="text-white">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione.
                        </p>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      {/* <CloudArrowUpIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600"
                      /> */}
                      <span>
                        <strong className="font-semibold textCyan">
                          Text Here.
                        </strong>{' '}
                        <p className="text-white">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione.
                        </p>
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight textCyan">
                    More text will go here.
                  </h2>
                  <p className="mt-6">
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                    consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                    euismod vitae interdum mauris enim, consequat vulputate
                    nibh. Maecenas pellentesque id sed tellus mauris, ultrices
                    mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam
                    sed nullam sed diam turpis ipsum eu a sed convallis diam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
