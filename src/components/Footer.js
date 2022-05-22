import React from "react";
import logoWeb from "../images/logo.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import ig from "../images/ig.png";
import fb from "../images/fb.png";
import li from "../images/li.png";
import yt from "../images/yt.png";
import tw from "../images/tw.png";

export default function Footer() {
  return (
    <>
      <div className="bg-primary text-white font-poppins py-10 sm:py-20 grid grid-cols-8 sm:grid-cols-12 justify-items-center">
        <div className="sm:col-start-2 xl:col-start-1 col-span-1 sm:col-span-4 text-xs col-start-3 mb-5 mr-2">
          <div className="w-10/12 pb-6">
            <img src={logoWeb} alt="" />
          </div>
          <div className="flex flex-col">
            {" "}
            <div className="flex flex-row items-center pb-1">
              <img src={phone} alt="" />
              <a href="https://wa.me/628665492655">
                <h1 className="hover:opacity-75 pl-4">0866-549-2655</h1>
              </a>
            </div>
            <div className="flex flex-row items-center">
              <img src={mail} alt="" />
              <h1 className="hover:opacity-75 pl-4">
                <a href="mailto:info@startraveller.club">
                  info@startraveller.club
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-start-2 sm:col-start-7 col-span-2 sm:col-span-1">
          <div className="grid grid-row-5 gap-y-2 col-span-2">
            <h1 className="text-tiny sm:text-xs uppercase font-bold">Travel</h1>
            <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
              The Club
            </h1>
            <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
              StarTRAVELLER Pass
            </h1>
            <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
              Experience
            </h1>
            <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
              Bespake
            </h1>
          </div>
        </div>
        <div className="grid grid-row-5 gap-y-2 col-span-2">
          <h1 className="text-tiny sm:text-xs uppercase font-bold">Get Help</h1>
          <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
            FAQ's
          </h1>
          <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
            Payment Options
          </h1>
          <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
            Contact Us
          </h1>
          <h1></h1>
        </div>
        <div className="grid grid-row-5 gap-y-2 col-span-2">
          <h1 className="text-tiny sm:text-xs uppercase font-bold">About startraveller</h1>
          <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
            News
          </h1>
          <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
            Blogs
          </h1>
          <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
            Brochure Download
          </h1>
          <h1 className="cursor-pointer hover:opacity-75 text-tiny sm:text-xs font-light">
            Book a webinar spot
          </h1>
        </div>
      </div>
      <hr className="w-5/6 -mt-5 sm:-mt-10 mx-auto opacity-50"></hr>
      <div className="bg-primary py-8 text-white font-poppins grid grid-cols-1 sm:grid-cols-7 lg:grid-cols-12 justify-items-center sm:justify-items-start">
        <div className="sm:col-start-2 lg:col-start-2 sm:col-span-2 lg:col-span-3 flex flex-row gap-5">
          <img src={ig} alt="Instagram StarTRAVELLER" className="w-4/6 h-4/6" />
          <img src={li} alt="Instagram StarTRAVELLER" className="w-4/6 h-4/6" />
          <img src={fb} alt="Instagram StarTRAVELLER" className="w-4/6 h-4/6" />
          <img src={tw} alt="Instagram StarTRAVELLER" className="w-4/6 h-4/6" />
          <img src={yt} alt="Instagram StarTRAVELLER" className="w-4/6 h-4/6" />
        </div>
        <div className="mt-2 sm:mt-0 sm:col-span-4 sm:col-start-5 lg:col-span-3">
          <h1 className="cursor-pointer text-xs 2xl:text-sm font-light">
            © StarTRAVELLER, Inc. All rights reserved.
          </h1>
        </div>
        <div className="sm:col-start-2 lg:col-start-8 flex mx-auto justify-center pt-4 sm:pt-0">
          <h1 className="items-center cursor-pointer hover:opacity-75 text-xs 2xl:text-sm font-light">
            Guides
          </h1>
        </div>
        <div className="flex mx-auto justify-center">
        <h1 className="items-center cursor-pointer hover:opacity-75 text-xs 2xl:text-sm font-light">
            Terms of Use
          </h1>
        </div>
        <div className="flex mx-auto justify-center">
        <h1 className="items-center cursor-pointer hover:opacity-75 text-xs 2xl:text-sm font-light">
            Company Details
          </h1>
        </div>
        <div className="flex justify-start sm:col-span-2">
        <h1 className="items-center cursor-pointer hover:opacity-75 text-xs 2xl:text-sm font-light ">
           Privacy & Cookie Policy
          </h1>
        </div>
      </div>
    </>
  );
}
