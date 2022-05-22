import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";
import { EffectFade, Navigation, Pagination } from "swiper";

export default function Carousel() {

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        freeMode={true}
        watchSlidesProgress={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper navigation"
      >
        <SwiperSlide>
          <div className="bg-dubai dubai font-poppins">
            <div className="absolute top-24 sm:top-40 pl-12 2xl:top-72 2xl:pt-16 2xl:pl-40">
              {" "}
              <h1 className="text-3xl sm:text-5xl 2xl:text-7xl text-white font-bold">Save up to 85%</h1>
              <h1 className="text-3xl sm:text-5xl 2xl:text-7xl text-white font-bold pt-2">on Resort Stays</h1>
              <h1 className="text-lg text-white font-light pt-5">StarTraveller made easy, everyone can <span className="font-bold">save on travel.</span></h1>
              <h1 className="text-lg text-white font-light">Member can <span className="font-bold">save even more.</span></h1>
              <button
                className="transition ease-in-out delay-0 duration-500 text-primary px-3 py-4 sm:px-5 sm:py-5 rounded-full border-2 border-white bg-white hover:text-white hover:bg-primary text-sm sm:text-xl mt-14 tracking-wider"
                type="button"
              >
                <a href="#">Try <span className="font-bold">FREE</span> for <span className="font-bold">6 month</span></a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-japan japan font-poppins">
          <div className="absolute top-24 sm:top-40 pl-12 2xl:top-72 2xl:pt-16 2xl:pl-40">
              {" "}
              <h1 className="text-3xl sm:text-5xl 2xl:text-7xl text-white font-bold">Save up to 85%</h1>
              <h1 className="text-3xl sm:text-5xl 2xl:text-7xl text-white font-bold pt-2">on Resort Stays</h1>
              <h1 className="text-lg text-white font-light pt-5">StarTraveller made easy, everyone can <span className="font-bold">save on travel.</span></h1>
              <h1 className="text-lg text-white font-light">Member can <span className="font-bold">save even more.</span></h1>
              <button
                className="transition ease-in-out delay-0 duration-500 text-primary px-3 py-4 sm:px-5 sm:py-5 rounded-full border-2 border-white bg-white hover:text-white hover:bg-primary text-sm sm:text-xl mt-14 tracking-wider"
                type="button"
              >
                <a href="#">Try <span className="font-bold">FREE</span> for <span className="font-bold">6 month</span></a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-bali bali font-poppins">
          <div className="absolute top-24 sm:top-40 pl-12 2xl:top-72 2xl:pt-16 2xl:pl-40">
              {" "}
              <h1 className="text-3xl sm:text-5xl 2xl:text-7xl text-white font-bold">Save up to 85%</h1>
              <h1 className="text-3xl sm:text-5xl 2xl:text-7xl text-white font-bold pt-2">on Resort Stays</h1>
              <h1 className="text-lg text-white font-light pt-5">StarTraveller made easy, everyone can <span className="font-bold">save on travel.</span></h1>
              <h1 className="text-lg text-white font-light">Member can <span className="font-bold">save even more.</span></h1>
              <button
                className="transition ease-in-out delay-0 duration-500 text-primary px-3 py-4 sm:px-5 sm:py-5 rounded-full border-2 border-white bg-white hover:text-white hover:bg-primary text-sm sm:text-xl mt-14 tracking-wider"
                type="button"
              >
                <a href="#">Try <span className="font-bold">FREE</span> for <span className="font-bold">6 month</span></a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
