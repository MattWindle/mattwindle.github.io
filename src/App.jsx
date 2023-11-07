import { useState } from 'react'
import './App.css'

function App() {

  return (

    <>
<header>
  <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <div className="flex items-center lg:order-2">
        <a
          href="#"
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          Log in
        </a>
        <a
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-700 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get started
        </a>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Company
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Marketplace
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pt-16">
        <div className="grid gap-8 items-center lg:gap-12 lg:grid-cols-12">
          <div className="col-span-6 text-center lg:text-left lg:mb-0">
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
              Matt Windle
            </h1>
            <p className="mx-auto mb-4 max-w-xl text-gray-600 lg:mx-0 dark:text-gray-400">
              A React UI Develope behind captivating digital experiences. Crafting innovative interfaces is my passion. Let's elevate your web presence."
            </p>
            <button className='py-2 px-4 bg-blue-700 text-white rounded-md font-medium'>Case Studies</button>
          </div>
          <div className="col-span-6">
            <img className='block mx-auto' src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=600" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white dark:bg-gray-900 pt-8 mb-4">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
          Case Studies
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          A range of projects that I've been part of throughout my career
        </p>
      </div>
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6 mt-4">
        <div className="">
          <h2 className="mb-4 text-2xl tracking-tight font-semibold text-gray-900 dark:text-white">
            EKM Dashboard UI
          </h2>
          <p className="mb-4 font-normal text-gray-600">
            In this project, I harnessed the power of React to convert a Figma design into a dynamic frontend UI. Discover how I bridged the gap between design and functionality, transforming static visuals into an interactive web experience. 
          </p>
          <p className='mb-4 text-gray-600'>Join me in exploring the journey from Figma to React and the creative solutions employed along the way.</p>
          <button className=' py-2 px-4 bg-blue-700 text-white rounded-md font-semibold'>View Project</button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=600"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=600"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
<footer className="bg-gray-50 dark:bg-gray-800 mt-16">
  <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:-10">
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
      <div className="col-span-2">
        <a
          href="#"
          className="flex items-center mb-2 text-2xl font-semibold text-gray-900 sm:mb-0 dark:text-white"
        >
          Matt Windle
        </a>
        <p className="my-4 font-light text-gray-500 dark:text-gray-400">
          A React UI Develope behind captivating digital experiences. Crafting innovative interfaces is my passion. Let's elevate your web presence."
        </p>
        <ul className="flex mt-5 space-x-6">
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="lg:mx-auto">
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Download
        </h2>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <a href="#" className="hover:underline">
              iOS
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Android
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Windows
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              MacOS
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
      © 2021-2022{" "}
      <a href="#" className="hover:underline">
        Matt Windle™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

    </>


  )
}

export default App
