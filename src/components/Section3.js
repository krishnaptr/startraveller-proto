import React from "react";
import royal from "../images/royal.png";
import prestige from "../images/prestige.png";
import imperial from "../images/imperial.png";
import "../App.css";

export default function Section3() {
  return (
    <>
      <div className="font-poppins text-primary text-center px-2">
        <h1 className="text-4xl 2xl:text-5xl font-bold">
          Choose the subscription
        </h1>
        <h1 className="text-4xl 2xl:text-5xl font-bold xl:pt-2">
          that is <u>right for you</u>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 text-center items-center justify-items-center text-primary pt-10 md:pt-0">
        <div className="xl:col-start-2 bg-imperial imperial xl:mr-64">
          <p className="font-syne uppercase text-xl font-bold text-white pt-14 tracking-ultra">
            imperial
          </p>
          <div className="imperial-desc bg-white border-2 border-primary border-opacity-20 ml-10 mt-5">
            <div className="flex font-poppins justify-between p-6">
              <div className="text-left">
                <h1 className="text-4xl">$699</h1>
                <h1 className="font-bold text-sm tracking-semiultra cross">
                  $729
                </h1>
              </div>
              <div className="text-right">
                <h1 className="font-bold uppercase tracking-semiultra">save</h1>
                <h1 className="font-bold uppercase tracking-semiultra">$30</h1>
              </div>
            </div>
            <div className="text-left px-5 font-light detail-pack">
              <li>Unlimited Commerce Rays</li>
              <li>Custom Ray Themes</li>
              <li>Full API Access</li>
              <li>0.5% Overage Fee</li>
              <li>$100,000.00 Monthly Ceiling</li>
            </div>
            <div>
              <button
                className="transition ease-in-out delay-0 duration-500 bg-none px-5 py-3 rounded-full border-2 border-primary hover:text-white hover:bg-primary text-base mt-14"
                type="button"
              >
                <a href="#">Get Started</a>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-royal royal xl:royal-xl mt-28 mb-40">
          <p className="font-syne uppercase text-xl font-bold text-white pt-14 tracking-ultra">
            royal
          </p>
          <div className="royal-desc-xl bg-primary border-2 border-primary border-opacity-20 ml-10 mt-5 text-white">
            <div className="flex font-poppins justify-between p-6">
              <div className="text-left">
                <h1 className="text-4xl">$899</h1>
                <h1 className="font-bold text-sm tracking-semiultra cross">
                  $999
                </h1>
              </div>
              <div className="text-right">
                <h1 className="font-bold uppercase tracking-semiultra">save</h1>
                <h1 className="font-bold uppercase tracking-semiultra">$100</h1>
              </div>
            </div>
            <div className="text-left px-5 font-light detail-pack-royal text-lg">
              <li>Unlimited Commerce Rays</li>
              <li>Custom Ray Themes</li>
              <li>Full API Access</li>
              <li>0.5% Overage Fee</li>
              <li>$100,000.00 Monthly Ceiling</li>
            </div>
            <div>
              <button
                className="transition ease-in-out delay-0 duration-500 bg-none px-6 py-4 rounded-full border-2 border-white hover:text-primary hover:bg-white text-lg mt-14"
                type="button"
              >
                <a href="#">Get Started</a>
              </button>
            </div>
          </div>
        </div>
        <div className="xl:col-end-5 bg-prestige prestige md:ml-96 xl:ml-64">
          <p className="font-syne uppercase text-xl font-bold text-white pt-14 tracking-ultra">
            prestige
          </p>
          <div className="imperial-desc bg-white border-2 border-primary border-opacity-20 ml-10 mt-5">
            <div className="flex font-poppins justify-between p-6">
              <div className="text-left">
                <h1 className="text-4xl">$1299</h1>
                <h1 className="font-bold text-sm tracking-semiultra cross">
                  $1499
                </h1>
              </div>
              <div className="text-right">
                <h1 className="font-bold uppercase tracking-semiultra">save</h1>
                <h1 className="font-bold uppercase tracking-semiultra">$200</h1>
              </div>
            </div>
            <div className="text-left px-5 font-light detail-pack">
              <li>Unlimited Commerce Rays</li>
              <li>Custom Ray Themes</li>
              <li>Full API Access</li>
              <li>0.5% Overage Fee</li>
              <li>$100,000.00 Monthly Ceiling</li>
            </div>
            <div>
              <button
                className="transition ease-in-out delay-0 duration-500 bg-none px-5 py-3 rounded-full border-2 border-primary hover:text-white hover:bg-primary text-base mt-14"
                type="button"
              >
                <a href="#">Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
