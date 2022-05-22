import React from "react";
import chat from "../images/chat.png";
import star from "../images/star.png";
import sign from "../images/sign.png";

export default function Section5() {
  return (
    <>
      <div className="font-poppins text-primary bg-dgray py-20">
        <h1 className="text-4xl 2xl:text-5xl font-normal text-center">
          How can we help?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 justify-items-center mt-12">
          <div className="sm:col-start-2 text-center justify-center flex flex-col w-8/12 sm:w-9/12 md:w-9/12 items-center justify-items-center">
            <img src={sign} alt="" width="65" heigth="65" />
            <h1 className="text-xs font-medium 2xl:text-lg py-5">
              Create An Account, See Club Rates And Availability.
            </h1>
            <button
                className="transition ease-in-out delay-0 duration-500 bg-none px-2 py-1 xl:py-3 xl:px-12 2xl:py-5 rounded-full border border-primary hover:text-white hover:bg-primary sm:mt-6 mb-10 sm:mb-0"
                type="button"
              >
                <a href="#" className="text-xs xl:text-md 2xl:text-lg">Create Account</a>
              </button>
          </div>
          <div className="text-center justify-center flex flex-col w-8/12 sm:w-9/12 md:w-9/12 items-center justify-items-center">
          <img src={chat} alt="" width="55" heigth="55" />
          <h1 className="text-xs font-medium 2xl:text-lg py-5">
              Learn More About StarTRAVELLER Now.
            </h1>
            <button
                className="transition ease-in-out delay-0 duration-500 bg-none px-2 py-1 xl:py-3 xl:px-12 2xl:py-5 rounded-full border border-primary hover:text-white hover:bg-primary sm:mt-6 mb-10 sm:mb-0"
                type="button"
              >
                  <a href="#" className="text-xs xl:text-md 2xl:text-lg">Talk to Our Team</a>
              </button>
          </div>
          <div className="sm:col-end-5 text-center justify-center flex flex-col w-8/12 sm:w-9/12 md:w-9/12 items-center justify-items-center">
          <img src={star} alt="" width="65" heigth="65" />
          <h1 className="text-xs font-medium 2xl:text-lg py-5">
            Are You Ready To Subscribe Our Channel?
            </h1>
            <button
                className="transition ease-in-out delay-0 duration-500 bg-none px-2 py-1 xl:py-3 xl:px-12 2xl:py-5 rounded-full border border-primary hover:text-white hover:bg-primary sm:mt-6 mb-10 sm:mb-0"
                type="button"
              >
                <a href="#" className="text-xs xl:text-md 2xl:text-lg">Subscribe Now</a>
              </button>
          </div>
        </div>
      </div>
    </>
  );
}
