import React from "react";

//images
import metalogo from "../assets/metalogo.png";
import metabnb from "../assets/metabnb.png";

const Test = () => {
  return (
    <nav class="shadow" role="navigation">
      <div class="container mx-auto p-4 flex flex-wrap items-center ">
        {/* Logo */}
        <div class="mr-4 md:mr-8">
          <img className="inline-block" src={metalogo} alt="" />
          <img className="inline-block ml-2" src={metabnb} alt="" />
        </div>
        {/* Trigger Button */}
        <div class="ml-auto md:hidden">
          <button class="text-primary border-0 " type="button">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="w-full  md:w-auto md:flex-grow md:flex md:items-center">
          <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
            <li className=" block hover:opacity-70 py-1 px-2 md:px-4 md:text-lg lg:text-xl">
              Home
            </li>
            <li className=" block hover:opacity-70 py-1 px-2 md:px-4 md:text-lg lg:text-xl">
              Place to Stay
            </li>
            <li className=" block hover:opacity-70 py-1 px-2 md:px-4 md:text-lg lg:text-xl">
              NFTs
            </li>
            <li className=" block hover:opacity-70 py-1 px-2 md:px-4 md:text-lg lg:text-xl">
              Community
            </li>
          </ul>
          <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li>
              <a class="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">
                Link
              </a>
            </li>
            <li>
              <a
                class="block px-4 py-1 md:p-2 lg:px-4 text-purple-600"
                href="#"
                title="Active Link"
              >
                Active Link
              </a>
            </li>
            <li>
              <a class="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Test;
