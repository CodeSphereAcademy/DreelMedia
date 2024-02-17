import React from "react";
import imgAbout from "../Performance-Marketing.png";
export default function About() {
  return (
    <section id="About">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src={imgAbout}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
            <div className="p-4 sm:p-16 lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-orange-500">
                About Dreel Media<br/> <span className="font-light md:text-3xl text-2xl">Empowering Businesses for Success</span>
              </h2>
              <p className="mt-4 md:text-xl text-gray-600">
                Dreel Media is a dynamic digital media and technology agency dedicated to empowering businesses to thrive in today's ever-evolving marketplace. With a passion for innovation and a commitment to excellence, we offer a comprehensive suite of services designed to propel businesses forward and maximize their online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
