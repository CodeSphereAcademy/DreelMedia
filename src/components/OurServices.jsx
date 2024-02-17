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
            className="block rounded-xl border border-orange-500 bg-white p-8 shadow-xl transition"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-12 text-orange-500"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
              <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708" />
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
            className="block rounded-xl border border-orange-500 bg-white p-8 shadow-xl transition"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-12 -rotate-12 text-orange-500"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
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
            className="block rounded-xl border border-orange-500 p-8 shadow-xl transition bg-white"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-12 text-orange-500"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
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
      </div>
    </section>
  );
}
