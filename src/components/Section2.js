import React from "react";
import ico1 from "../images/ico1.png";
import ico2 from "../images/ico2.png";
import ico3 from "../images/ico3.png";
import ico5 from "../images/ico5.png";
import ico7 from "../images/ico7.png";
import ico8 from "../images/ico8.png";
import ico9 from "../images/ico9.png";
import ico10 from "../images/ico10.png";
import "../App.css";

export default function Section2() {
  return (
    <div className="flex items-center text-primary flex-col xl:flex-row px-0 2xl:px-20 font-poppins">
      <ul className="flex items-center justify-around flex-auto w-5/12 xl:w-full flex-wrap text-center xl:ml-32">
        <li className="flex flex-col justify-center items-center">
          <img src={ico5} width="55" height="55" className="py-2" />
          <h1 className="text-xs xl:text-md">1,000,000+</h1>
          <h1 className="text-xs xl:text-md">Properties</h1>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img src={ico2} width="55" height="55" className="py-2" />
          <h1 className="text-xs xl:text-md">Reward</h1>
          <h1 className="text-xs xl:text-md">Credits</h1>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img src={ico3} width="55" height="55" className="py-2" />
          <h1 className="text-xs xl:text-md">Price</h1>
          <h1 className="text-xs xl:text-md">Guarantee</h1>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img src={ico1} width="50" height="50" className="py-2" />
          <h1 className="text-xs xl:text-md">Personal</h1>
          <h1 className="text-xs xl:text-md">Concierge</h1>
        </li>
        <ul className="flex items-center justify-around flex-auto w-6/12 xl:w-full flex-wrap text-center pt-3 xl:pt-10">
          <li className="flex flex-col justify-center items-center">
            <img src={ico7} width="55" height="55" className="py-2" />
            <h1 className="text-xs xl:text-md">Boomerang</h1>
            <h1 className="text-xs xl:text-md">Reward</h1>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={ico8} width="55" height="55" className="py-2" />
            <h1 className="text-xs xl:text-md">Marketplace</h1>
            <h1 className="text-xs xl:text-md">Properties</h1>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={ico9} width="55" height="55" className="py-2" />
            <h1 className="text-xs xl:text-md">Live</h1>
            <h1 className="text-xs xl:text-md">Chat</h1>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={ico10} width="55" height="55" className="py-2" />
            <h1 className="text-xs xl:text-md">Weekly</h1>
            <h1 className="text-xs xl:text-md">Stay</h1>
          </li>
        </ul>
      </ul>
      <div>
        <div className="w-full xl:ml-32 flex-auto flex flex-col items-center xl:items-start mt-8 xl:mt-0">
          <h1 className="text-4xl 2xl:text-5xl font-bold">We give</h1>
          <h1 className="text-4xl 2xl:text-5xl font-bold pt-2">
            a lot of <u>Benefits</u>
          </h1>
          <div className="mt-5 text-center flex flex-col justify-center w-full items-center xl:items-start xl:text-left">
            <p className="w-4/6">
              It's our mission to help you prioritize what matters most,
              crafting new memories with your loved ones as you{" "}
              <span className="font-bold">explore the world</span> together.
            </p>
            <p className="w-4/6 mt-5">
              Your StarTraveller subscription provides access to our full
              portfolio of{" "}
              <span className="font-bold">
                exclusive luxury vacation homes, five-star resorts, and boutique
                experiences
              </span>
              , as we as a dedicated Care team of travel experts and on-site
              staff when you arrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
