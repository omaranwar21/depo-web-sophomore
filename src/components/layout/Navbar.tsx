import Link from "next/link";
import React from "react";
import Image from "next/image";
import LangToggle from "./LangToggle";
import { useLocale } from "next-intl";

const Navbar = () => {
  const currentLang = useLocale();
  return (
    <nav className="z-[9999] fixed top-4 w-full px-4 md:px-0">
      <div className="bg-white/20 shadow-black/10 backdrop-blur-[5px] border border-white/20 container transition-all duration-300 h-16 mx-auto shadow-sm rounded-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex justify-start items-center pt-1 lg:ms-5 w-full">
              <Image
                src="/img/logo.svg"
                className="h-12 lg:h-8 w-auto hover:rotate-[360deg] duration-1000"
                alt="logo"
                width={1024}
                height={1024}
              />
              <p
                className="hidden lg:block bg-gradient-to-r from-[#536CB3] via-[#536CB3] to-[#F15C54] bg-clip-text text-transparent text-xl lg:text-2xl font-bold ml-0"
                style={{ textShadow: "rgba(0, 0, 0, 0.25) 0px 5px 6px" }}
              >
                {currentLang === "en" ? "Sophomore" : "سوفومور"}
              </p>
            </div>
          </Link>
          <LangToggle />
        </div>
        <div className="hidden md:flex items-center ms-5">
          <div className="w-auto text-white flex items-center gap-[-5px]">
            <ul className="flex gap-x-4 lg:gap-x-7 font-semibold">
              <li>
                <Link
                  href="/"
                  className="text-white text-sm lg:text-base flex items-center justify-center active"
                  style={{ textShadow: "rgba(0, 0, 0, 0.75) 2px 2px 4px" }}
                >
                  <span className="text-base md:text-md">
                    {currentLang === "en" ? "Home" : "الرئيسية"}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white text-sm lg:text-base flex items-center justify-center"
                  style={{ textShadow: "rgba(0, 0, 0, 0.75) 2px 2px 4px" }}
                >
                  <span className="text-base md:text-md">
                    {currentLang === "en" ? "About Us" : "من نحن"}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white text-sm lg:text-base flex items-center justify-center"
                  style={{ textShadow: "rgba(0, 0, 0, 0.75) 2px 2px 4px" }}
                >
                  <span className="text-base md:text-md">
                    {currentLang === "en" ? "Contact Us" : "اتصل بنا"}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white text-sm lg:text-base flex items-center justify-center"
                  style={{ textShadow: "rgba(0, 0, 0, 0.75) 2px 2px 4px" }}
                >
                  <span className="text-base md:text-2xl">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
            <button className="bg-[#536CB3] py-2 px-8 rounded-full font-semibold hover:bg-[#F15C54] transition-all duration-200 ms-8 text-white">
              {currentLang === "en" ? "Login" : "تسجيل الدخول"}
            </button>
          </div>
        </div>
        <button className="md:hidden mr-5 text-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>{" "}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
