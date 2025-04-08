import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import screenshot from '@/public/images/screenshot.png';

const Homepage = () => {
  return (
    <>
      <header className="flex shadow-lg py-4 px-4 sm:px-10 backgroundGray min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          <div className="flex items-center ml-auto space-x-6">
            <Link href="/sign-in">
              <Button className="font-medium bg-white text-slate-800">
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="px-4 py-2 text-sm rounded-sm font-medium text-slate-800 backgroundCyan">
                Sign up
              </Button>
            </Link>

            <button id="toggleOpen" className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#333"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
          <Image
            className="mb-4"
            alt="hero"
            height={400}
            width={400}
            src={logo}
          />
          <div className="text-center lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed text-white">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r backgroundCyan  px-6 py-12">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h2 className="text-slate-800 sm:text-4xl text-3xl font-bold mb-6">
            Placeholder text here
          </h2>
          <p className="text-slate-800 text-base text-center mb-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <button
            type="button"
            className="bg-white text-[15px] text-slate-800 font-semibold py-3 px-6 rounded-lg hover:bg-slate-200"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="backgroundGray p-8 my-4 mx-5 rounded-2xl shadow-lg">
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
      <footer className="backgroundGray text-gray-300 py-6 px-16 tracking-wide">
        <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
          <p className="text-[15px] leading-loose">
            © Eventor. All rights reserved.
          </p>
          <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
