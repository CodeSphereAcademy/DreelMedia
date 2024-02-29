import React from "react";
import imgAbout from "../assets/Intro.png";
export default function About() {
  return (
    <section id="About">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div class="grid gap-4">
              <div>
                  <img class="h-auto max-w-full rounded-lg" src={imgAbout} alt=""/>
              </div>
          </div>
              <div className="">
                <div className="p-4 sm:p-16 lg:py-24">
                  <h2 className="text-4xl font-bold md:text-5xl text-orange-500 mb-2 md:mb-3">
                    About
                  </h2>
                  <h2 className="text-4xl font-bold md:text-5xl text-orange-500">
                    Dreel Technologies<br/> <span className="font-light md:text-3xl text-xl">Empowering Businesses for Success</span>
                  </h2>
                  <p className="mt-4 md:text-xl text-gray-600">
                    Dreel Technologies is a dynamic digital media and technology agency dedicated to empowering businesses to thrive in today's ever-evolving marketplace. With a passion for innovation and a commitment to excellence, we offer a comprehensive suite of services designed to propel businesses forward and maximize their online presence.
                  </p>
                </div>
              </div>
        </div>   
      </div>
    </section>
  );
}
