"use client";
import images from "@/utils/images.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaUserCircle, FaSearch, FaBars } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

type Props = {};

const NavbarComponent = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [searchDesktop, setSearchDesktop] = useState<string>("");
  const history = useRouter();

  const searchSubmit = () => {
    history.push("/search/" + search);
  };
  const searchdesktopsubmit = () => {
    history.push("/search/" + searchDesktop);
  };

  return (
    <header>
      <nav className="bg-primary flex items-center justify-between px-2 sm:px-4 pt-2 pb-1 shadow-lg fixed z-50 ">
        <div className="w-1/3 sm:w-1/5 flex items-center">
          <div className="sm:hidden">
            <FaBars className="text-xl text-white mr-2" />
          </div>
          <Link href="/">
            <img
              src={images.logo.src}
              alt="Kustom Parts"
              className="w-full sm:w-1/2"
            />
          </Link>
        </div>
        <div className="hidden sm:block">
          <form
            onSubmit={searchdesktopsubmit}
            className="flex items-center bg-white px-2 rounded-md w-full py-2"
          >
            <input
              type="text"
              placeholder="Search Your Product"
              className="outline-none w-[20rem]"
              onChange={(e) => setSearchDesktop(e.target.value)}
              value={searchDesktop}
            />
            <span className="cursor-pointer font-bold">
              <FaSearch />
            </span>
          </form>
        </div>
        <div className="flex text-white mr-3 items-center">
          <Link href="/login" className="mx-4 text-white">
            <span className="text-xl sm:text-3xl hover:text-gray-300">
              <FaUserCircle />
            </span>
          </Link>
          <Link href="/cart">
            <span className="text-xl sm:text-3xl hover:text-gray-300">
              <FaCartPlus />
            </span>
          </Link>
        </div>
      </nav>

      {toggle && toggle == true ? (
        <div className="bg-gray-200 px-4 flex items-center mx-auto pb-1 m-desktop-none m-d-flex">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0 bg-gray-200">
              <li>
                <Link
                  className="inline-flex  w-full  hover:bg-red-200 rounded-full hover-transition  shadow-sm px-4 py-2  text-sm font-medium text-gray-700"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex  w-full  hover:bg-red-200 rounded-full hover-transition  shadow-sm px-4 py-2  text-sm font-medium text-gray-700"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>{/* <NCERTDropdown /> */}</li>
            </ul>
          </nav>
        </div>
      ) : null}

      <div className="bg-gray-200 flex items-center mx-auto pb-1 sm:hidden fixed w-full z-10">
        <form
          className="neomorph mt-11 flex w-full px-2"
          onSubmit={searchSubmit}
        >
          <input
            type="text"
            className="rounded outline-none px-3 neomorp-search w-full py-1"
            placeholder="Search Your Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="bg-white px-1 rounded-md">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default NavbarComponent;
