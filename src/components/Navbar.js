import React, { useState } from "react";

//images
import metalogo from "../assets/metalogo.png";
import metabnb from "../assets/metabnb.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  return (
    <>
      <nav
        className="relative z-10 top-4 px-4  p-2  flex flex-wrap md:flex-no-wrap  md:p-0  items-center justify-between "
        role="navigation"
      >
        <div title="MetaBNB Home" className="flex items-center relative">
          <img className="inline-block" src={metalogo} alt="" />
          <img className="inline-block ml-2" src={metabnb} alt="" />
        </div>

        <div title="Toggle Navbar" className="lg:hidden">
          <button
            class=" text-primary border-0 "
            type="button"
            onClick={() => setnav(!nav)}
          >
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

        <div
          className={`md:shadow-transparent p-2 md:p-0  md:bg-0 w-full lg:w-auto lg:flex-grow lg:flex md:items-center ${
            nav ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col mx-auto lg:flex-row md:items-center text-xl">
            <li className=" block hover:opacity-70 py-1 px-2 md:px-4 md:text-lg lg:text-xl">
              Home
            </li>
            <li className=" block hover:opacity-70 py-1 px-2 md:px-4 md:text-lg lg:text-xl">
              <Link to="/place-to-stay">Place to Stay</Link>
            </li>
            <li className="  block hover:opacity-70 py-1 px-2 md:px-4 md:text-lg lg:text-xl">
              NFTs
            </li>
            <li className=" block hover:opacity-70 py-1 px-2 md:px-4 md:text-lg lg:text-xl">
              Community
            </li>
          </ul>

          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="lg:px-10 md:px-6 lg:w-auto w-full lg:py-4 py-2 bg-primary text-white hover:opacity-50 transition-all duration-500 ease-in  rounded-xl"
          >
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
