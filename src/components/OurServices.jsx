import React from "react";

export default function OurServices() {
  return (
    <section className="bg-gray-100 text-black" id="Services">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-orange-500">
            Services Offered
          </h2>

          <p className="mt-4 text-gray-800">
            At Dreel Media, we offer a comprehensive range of services tailored
            to meet the diverse needs of our clients. Our team of experts
            combines cutting-edge technology with creative innovation to deliver
            solutions that drive results. Explore our services below..
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-orange-500 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-orange-500">
              Technology Services
            </h2>

            <p className="mt-1 text-sm text-gray-800">
              We make technology tailored for your business be it Website, App
              or Artificial Inteligence to increase your sales
            </p>
          </a>

          <a
            className="block rounded-xl border border-orange-500 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-orange-500">
              Marketing Solutions
            </h2>

            <p className="mt-1 text-sm text-gray-800">
              We amplify your business visibility with brand design, digital
              marketing, social media management, and performance marketing
              solutions.
            </p>
          </a>

          <a
            className="block rounded-xl border border-orange-500 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-orange-500">
              Business Consultation
            </h2>

            <p className="mt-1 text-sm text-gray-800">
              We have professional business analysts ready to help solve your
              business problem. Call us to get free consultaton.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
