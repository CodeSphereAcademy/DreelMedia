import React from "react";

export default function MainContent() {
  return (
    <section className="bg-gray-100" id="MainContent">
      <div className="mx-auto max-w-screen-xl px-4 lg:py-36 py-24 lg:flex lg:h-3/4 lg:items-center">
        <div className="mx-auto max-w-2xl text-center">

          <h1 className="font-extrabold text-5xl text-orange-500 md:leading-tight">
              Your Ideas, Our Expertise<br/>
            <strong className="text-3xl font-light text-gray-900 sm:block">
              Let's Grow Your Business Together
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Specialized Strategies and Technology Solutions for Business Growth
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-300 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-orange-600 shadow hover:text-orange-700 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
