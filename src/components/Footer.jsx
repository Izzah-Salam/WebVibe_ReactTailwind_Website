export default function Footer() {
  return (
    <>
      <footer>
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-medium tracking-widest text-sm mb-3">
                Solution
              </h2>
              <nav className="list-none mb-10">
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  Analytics
                </li>
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  Marketing
                </li>
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  Commerce
                </li>
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  Insigt
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Support
              </h2>
              <nav className="list-none mb-10">
                <li
                  className="
                  text-gray-600
                  cursor-pointer
                  mb-2
                  hover:text-gray-800"
                >
                  Pricing
                </li>
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  Documentation
                </li>
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  Guids
                </li>
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  API status
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  About
                </li>
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  Blog
                </li>
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  Jobs
                </li>
                <li className="text-gray-600 cursor-pointer mb-2 hover:text-gray-800">
                  Career
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                For any Querry
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    for="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  ></label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#743671] border-0 py-2 px-6 focus:outline-none  rounded">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#743671]">
          <div className="container p-4 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <span className="ml-3 text-xl">WebVibe</span>
            </a>
            <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
              © 2024 ALL Rights Reserved by Izzah Salam
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-white cursor-pointer">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white cursor-pointer">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white cursor-pointer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white cursor-pointer">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
