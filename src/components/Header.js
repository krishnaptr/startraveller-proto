import React from "react";
import searchIcon from "../images/search-icon.png";
import logoWeb from "../images/logo.png";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="bg-white flex-wrap xl:flex-nowrap fixed flex items-center xl:mt-0 xl:px-24 px-8 justify-between xl:py-2 py-4 w-full z-40 font-poppins">
        <div className="flex justify-start z-50">
          <img src={logoWeb} alt="" className="w-8/12 xl:w-11/12" />
        </div>
        <div
          className={"xl:flex" + (navbarOpen ? "flex" : " hidden")}
        >
          <ul className="menu bg-white pb-10 xl:pb-0 absolute xl:relative pl-8 left-0 top-12 xl:top-0 xl:pl-20 2xl:pl-60 bg-none xl:flex-1 xl:w-auto flex-1 w-full z-40 h-auto xl:h-auto xl:flex items-center justify-end gap-6 xl:gap-6 2xl:gap-16 text-base md:text-tiny xl:text-md 2xl:text-base tracking-normal primary">
            <li className="block py-3 cursor-pointer 2xl:border-b-2 border-transparent hover:opacity-75 ">
              <a href="#hero">Price</a>
            </li>
            <li className="block py-3 cursor-pointer 2xl:border-b-2 border-transparent hover:opacity-75">
              <a href="#about">Benefit</a>
            </li>
            <li className="block py-3 cursor-pointer 2xl:border-b-2 border-transparent hover:opacity-75">
              <a href="#skill">Membership</a>
            </li>
            <li className="block py-3 cursor-pointer 2xl:border-b-2 border-transparent hover:opacity-75">
              <a href="#project">How to subscribe</a>
            </li>
            <li className="block py-3 cursor-pointer 2xl:border-b-2 border-transparent hover:opacity-75">
              <a href="#project">Contact</a>
            </li>
            <ul className="h-auto bg-white xl:pb-0 xl:mt-0 bg-non xl:flex-1 xl:w-auto flex-1 w-auto z-40 xl:h-auto xl:flex items-center justify-end gap-4 xl:gap-2 2xl:gap-4 xl:pl-24 text-base md:text-tiny 2xl:text-base tracking-normal primary">
              <li className="block py-3 cursor-pointer 2xl:border-b-2 border-transparent hover:opacity-75">
                <a href="#search">
                  {" "}
                  <img src={searchIcon} alt="" style={{ minWidth: "30px" }} />
                </a>
              </li>
              <li className="block py-3 cursor-pointer 2xl:border-b-2 border-transparent hover:opacity-75">
                <a href="#about">Get Started</a>
              </li>
              <button
                className="transition ease-in-out delay-0 duration-500 bg-none 2xl:px-8 xl:px-8 px-8 py-1 rounded-full border-2 border-primary hover:text-white hover:bg-primary"
                type="button"
              >
                <a href="#">Sign In</a>
              </button>
            </ul>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          className=""
        >
          <div
            className="flex xl:hidden flex-1 flex-col space-y-1 justify-end cursor-pointer z-50"
            id="bar"
          >
            <span id="bar1" className="block h-1 px-3 bg-primary"></span>
            <span id="bar3" className="block h-1 px-3 bg-primary"></span>
            <span id="bar2" className="block h-1 px-3 bg-primary"></span>
          </div>
        </button>
      </div>
    </>
  );
}
