import React from "react";
import saving from "../images/Saving.png";
import compare from "../images/Compare.png";
import ico1 from "../images/ico1.png";
import ico2 from "../images/ico2.png";
import ico3 from "../images/ico3.png";
import ico4 from "../images/ico4.png";
import "../App.css";

export default function Section1() {
  return (
    <div className="flex flex-col xl:flex-row justify-center text-center xl:text-left items-center text-primary font-poppins">
      <div className="flex-auto -mt-24 xl:ml-40 2xl:ml-60">
        <h1 className="text-4xl 2xl:text-5xl font-bold">Why subscribe to</h1>
        <h1 className="text-4xl 2xl:text-5xl font-bold pt-5">starTRAVELLER?</h1>
        <ul>
          <li className="flex flex-col xl:flex-row items-center pt-12">
            <img src={ico1} alt="" />
            <div className="px-8 py-4">
              <p className="font-bold text-md 2xl:text-lg">
                Best Price Guarantinee
              </p>
              <img
                src={ico4}
                alt=""
                className="hidden xl:inline absolute xl:ml-52 2xl:ml-56 xl:-mt-10 2xl:-mt-16 z-50 xl:w-3/12 2xl:w-auto"
              />
              <p className="uppercase text-xs 2xl:text-sm">
                Find a Lower Price Anywhere Online and We Will Refund you{" "}
                <span className="font-bold">110%</span> of the Difference.
              </p>
            </div>
          </li>
          <li className="flex flex-col xl:flex-row items-center">
            <img src={ico2} alt="" />
            <div className="px-8 py-4">
              <p className="font-bold text-md 2xl:text-lg">
                Personal Coincierge
              </p>
              <p className="text-xs 2xl:text-sm">
                You will find our Member Service Specialists Friendly and eager
                to help you plan an ideal vacation for you and your family.
              </p>
            </div>
          </li>
          <li className="flex flex-col xl:flex-row items-center">
            <img src={ico3} alt="" />
            <div className="px-8 py-4 w-7/12">
              <p className="font-bold text-md 2xl:text-lg">Discount Lifetime</p>
              <p className="text-xs 2xl:text-sm">
                Join lifetime membership, Get a life time{" "}
                <span className="font-bold">discount up to 85%</span> ALL IN.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="xl:ml-60 mt-10 ml-10 xl:-mt-24 w-10/12 xl:w-4/6">
        {/* <div>
          <div className="compare absolute bg-primary mt-32 z-45">
            <div className="flex flex-col pt-5 items-center justify-center">
              <p className="text-white text-xl font-bold">Compare</p>
              <p className="text-white text-xl font-bold">Public Prices</p>
              <p className="text-white text-lg pt-8 font-light">
                Public Prices
              </p>
              <ul className="flex flex-col pt-8">
                <li className="flex justify-between w-72 px-6 text-center">
                  <p className="text-white text-sm font-light">Expedia</p>
                  <p className="text-white text-sm font-light">$850</p>
                </li>
                <li className="flex justify-between w-72 px-6">
                  <p className="text-white text-sm font-light">Travelocity</p>
                  <p className="text-white text-sm font-light">$850</p>
                </li>
                <li className="flex justify-between w-72 px-6">
                  <p className="text-white text-sm font-light">Hotels.Com</p>
                  <p className="text-white text-sm font-light">$850</p>
                </li>
                <li className="flex justify-between w-72 px-6">
                  <p className="text-white text-sm font-light">Orbitz</p>
                  <p className="text-white text-sm font-light">$850</p>
                </li>
                <li className="flex justify-between w-72 px-6">
                  <p className="text-white text-sm font-light">CheapTickets</p>
                  <p className="text-white text-sm font-light">$850</p>
                </li>
                <li className="flex justify-between w-72 px-6">
                  <p className="text-white text-sm font-light">Hotwire</p>
                  <p className="text-white text-sm font-light">$850</p>
                </li>
                <div className="flex justify-between w-72 px-6 bg-white py-6 mt-10">
                 <p className="text-primary text-lg font-medium">StarTRAVELLER</p>
                  <p className="text-primary text-lg font-bold">$84</p>
                </div>
                <p className="text-white text-sm font-thin tracking-wider text-center mt-5">Price include tax</p>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="flex justify-center xl:block">
          <img
            src={compare}
            alt=""
            className="absolute -ml-5 mt-4 w-8/12 sm:w-4/12 xl:w-3/12 2xl:w-1/4 xl:-ml-36 2xl:-ml-56 xl:mt-6 2xl:mt-20"
          />
          <img
            src={saving}
            alt=""
            className="w-full sm:w-6/12 xl:w-10/12 2xl:w-9/12"
          />
        </div>
      </div>
    </div>
  );
}
