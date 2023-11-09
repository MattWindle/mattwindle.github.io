/* eslint-disable react/prop-types */

export function Header({ bgImage }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/95"></div>
      <div className="relative mx-auto h-[90svh] max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold text-gray-300 sm:text-6xl">
            Matt Windle
            <strong className="block text-4xl font-extrabold text-rose-700">
              UI Developer
            </strong>
          </h1>
          <p className="mt-4 max-w-xl text-gray-500 sm:text-xl/relaxed">
            A React UI Developer behind captivating digital experiences.
            Crafting innovative interfaces is my passion. Let&lsquo;s elevate
            your web presence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="text-normal block w-full rounded bg-rose-600 px-12 py-3 font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
