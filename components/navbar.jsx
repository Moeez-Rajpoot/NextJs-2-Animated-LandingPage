"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { AcmeLogo } from "./logo";
import { usePathname } from "next/navigation";
import { Prompt } from "next/font/google";
import FacebookIcon from "./Facebooklogo";
import TwitterIcon from "./twitterlogo";
import InstagramIcon from "./instagramlofo";

const prompt = Prompt({
  weight: "400",
  subsets: ['latin'],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getLinkClass = (path) => {
    return pathname === path
      ? `flex py-3 sm:px-2 text-slate-900 items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 bg-slate-300 rounded-sm text-nowrap " ${prompt.className}`
      : `flex py-3 sm:px-2 text-white items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5  hover:underline text-nowrap  ${prompt.className}`;
  };

  return (
    <nav
      id="navbar"
      className="bg-transparent p-1 fixed top-0 pt-3 w-full z-10 flex items-center justify-between"
    >
      <div className="h-fit ml-6 w-20">
        <AcmeLogo color="#cececf" />
      </div>

      <div className="flex-1 flex justify-center">
        <div
          ref={mobileMenuRef}
          className={`menu ${
            isOpen ? "flex" : "hidden"
          } md:flex items-center justify-center flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-slate-700 md:bg-transparent`}
          style={{ zIndex: 9 }}
        >
          <ul className="flex flex-col md:flex-row list-none w-full md:w-auto xl:ml-16">
            <li>
              <a
                className={getLinkClass("/dashboard/users")}
                href="#section1"
              >
                Tour <i className="fa-solid fa-users"></i>
              </a>
            </li>
            <li>
              <a
                className={getLinkClass("/dashboard/addcourse")}
                href="#section2"
              
              >
                Upgrade <i className="fa-solid fa-plus"></i>
              </a>
            </li>
            <li>
              <a
                className={getLinkClass("/dashboard/courses")}
                href="#section3"
               
              >
                Help <i className="fa-brands fa-discourse"></i>
              </a>
            </li>
            <li>
              <a
                className={getLinkClass("/dashboard/courses")}
                href="#section4"
            
              >
                Explore <i className="fa-brands fa-discourse"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="icons" className="flex justify-center items-center gap-7 mr-4">
        <div id="fb">
          <FacebookIcon />
        </div>
        <div id="tw">
          <TwitterIcon />
        </div>
        <div id="ig">
          <InstagramIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;