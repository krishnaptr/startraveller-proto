import React from "react";
import "../App.css";
import YoutubeEmbed from "./YoutubeEmbed";
import male from "../images/male.png";
import fisunset from "../images/fi_sunset.png";
import search from "../images/search-icon.png";

export default function Section4() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start text-primary font-poppins px-5 xl:px-28 2xl:px-72">
        <div className="w-full xl:w-8/12 text-center lg:text-left">
        <h1 className="text-4xl 2xl:text-5xl font-bold">Using StarTRAVELLER</h1>
        <h1 className="text-4xl 2xl:text-5xl font-bold xl:pt-2">
            <u>is easy</u>
          </h1>
          <li className="flex flex-col xl:flex-row items-center lg:items-start xl:items-center pt-5">
            <img src={male} alt="" />
            <div className="xl:px-4 xl:pt-8">
              <p className="font-bold text-md 2xl:text-lg">
              Sign Up
              </p>
              <p className="text-xs 2xl:text-sm">
              Start your FREE TRIAL today, there's no contracts, and you can cancel your membership at any time.
              </p>
            </div>
          </li>
          <li className="flex flex-col xl:flex-row items-center lg:items-start xl:items-center pt-3">
            <img src={search} alt="" />
            <div className="xl:px-4 xl:pt-5">
              <p className="font-bold text-md 2xl:text-lg">
              Search
              </p>
              <p className="text-xs 2xl:text-sm">
             Search our massive database of more than 1,000,000 hotels and resorts around the world.
              </p>
            </div>
          </li>
          <li className="flex flex-col xl:flex-row items-center lg:items-start xl:items-center pt-3">
            <img src={fisunset} alt="" />
            <div className="xl:px-4 xl:pt-5">
              <p className="font-bold text-md 2xl:text-lg">
              Book and Enjoy
              </p>
              <p className="text-xs 2xl:text-sm">
              Book with confidence knowing your got the best rate available. Now go pack your bags.
              </p>
            </div>
          </li>
        </div>
        <div className="video xl:ml-20 mt-5 xl:mt-0">
          <YoutubeEmbed embedId="c-JDpINnIB8" />
        </div>
       
      </div>
      <div className="mx-auto px-auto w-full text-center -mt-5 xl:-mt-12">
        <button
                className="transition ease-in-out delay-0 duration-500 text-white px-5 py-3 rounded-full border-2 border-primary bg-primary hover:text-primary hover:bg-white text-xs mt-14 tracking-wider"
                type="button"
              >
                <a href="#">Try <span className="font-bold">FREE</span> for <span className="font-bold">6 month</span></a>
              </button>
        </div>
    </>
  );
}
