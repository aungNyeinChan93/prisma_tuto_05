/* eslint-disable @next/next/no-img-element */
"use client";

import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";

interface Props {
  signOutComponent: ReactNode;
  session?: Session | null;
}
const Navbar = ({ signOutComponent, session }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  const navLinks = [
    { name: "home", path: "/" },
    { name: "quotes", path: "/tests/quotes" },
    { name: "jobs", path: "/tests/jobs" },
    { name: "create job", path: "/tests/jobs/create-job" },
  ];

  const pathname = usePathname();

  return (
    <main>
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <Link href={"/"} className=" cursor-pointer">
            <Image src={"/next.svg"} alt="logo" width={80} height={80} />
          </Link>
          <a href="#" className="hidden max-sm:block">
            <img
              src="https://readymadeui.com/readymadeui-short.svg"
              alt="logo"
              className="w-9"
            />
          </a>

          {/* Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:block`}
          >
            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
            >
              ✕
            </button>

            <ul className="lg:flex gap-x-4 max-lg:space-y-3">
              <li className="mb-6 hidden max-lg:block">
                <a href="#">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              {navLinks.map((navlink) => (
                <li
                  key={navlink.name}
                  className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
                >
                  <Link
                    href={navlink.path}
                    className={`hover:text-blue-700 block font-medium text-[15px] ${
                      navlink.path === pathname
                        ? "text-blue-700"
                        : "text-slate-900"
                    }`}
                  >
                    <span className=" font-bold tracking-wide">
                      {navlink.name.toUpperCase()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right actions */}

          <div className="flex max-lg:ml-auto space-x-4">
            {!session && (
              <>
                <button
                  type="button"
                  className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all"
                >
                  <Link href={"/auth/signup"}>Sign up</Link>
                </button>
              </>
            )}

            {session && (
              <>
                {/* signout */}
                {signOutComponent}
              </>
            )}

            {/* Open button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="lg:hidden cursor-pointer"
            >
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Navbar;
