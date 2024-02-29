import React from "react";

export default function Header() {
  return (
    <header style={{backgroundColor:'#12254D'}} id="Header">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-2xl font-extrabold text-white" href="#">
              <span className="sr-only">Home</span>
              Dreel Tech
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-base">
                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#About"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#Services"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#Services"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#Team"
                  >
                    {" "}
                    Teams{" "}
                  </a>
                </li>

                {/* <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Blogs{" "}
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="tel:9907839311"
              >
                <i class="bi bi-telephone-fill text-white me-1"></i> <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-16 items-center justify-center md:hidden">
          <div className="block md:hidden">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#About"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#Services"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#Services"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#Team"
                  >
                    {" "}
                    Teams{" "}
                  </a>
                </li>

                {/* <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Blogs{" "}
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
