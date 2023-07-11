import React, { useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { BiSquareRounded } from "react-icons/bi";
import Avater from "../../public/assets/homepage/avater.png";
const FeedbackList = [
  {
    id: 1,
    image: Avater,
    name: "Sabid Hasan Nabil",
    content:
      "We've been using Neocon Technologies software solutions for over a year now. Their team has been a pleasure to work with, and their innovative solutions have made our business operations more efficient and effective than ever before.",
    rating: "4",
  },
  {
    id: 2,
    image: Avater,
    name: "Ziaur Rahman",
    content:
      "We've been using Neocon Technologies software solutions for over a year now. Their team has been a pleasure to work with, and their innovative solutions have made our business operations more efficient and effective than ever before.",
    rating: "4.5",
  },
  {
    id: 3,
    image: Avater,
    name: "Sabid Hasan Nabil",
    content:
      "We've been using Neocon Technologies software solutions for over a year now. Their team has been a pleasure to work with, and their innovative solutions have made our business operations more efficient and effective than ever before.",
    rating: "4",
  },
  {
    id: 4,
    image: Avater,
    name: "Ziaur Rahman",
    content:
      "We've been using Neocon Technologies software solutions for over a year now. Their team has been a pleasure to work with, and their innovative solutions have made our business operations more efficient and effective than ever before.",
    rating: "4.5",
  },
];

function Feedback() {
  const splideOptions = {
    type: "loop",
    perPage: 3,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    interval: 4000,
    arrows: false,
    pagination: false,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
    },
  };
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="flex flex-row pb-5">
            <BiSquareRounded className="my-auto text-ntl_orange" />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
              Customers <span className="text-ntl_orange"> feedback</span>
            </p>
          </div>
          <div>
            <div>
              <Splide options={splideOptions}>
                {FeedbackList.map((feed, index) => (
                  <SplideSlide key={index}>
                    <div className="py-10 h-full">
                      <div className="flex flex-col p-5 rounded-3xl feedback_bg mx-5 xsm:mx-2 h-full text-center">
                        <div className="flex flex-col text-center mx-auto">
                          <Image
                            src={feed.image}
                            alt={feed.image}
                            width={50}
                            height={50}
                            className="w-auto h-auto rounded-full mx-auto border border-ntl_black bg-ntl_white"
                          />
                          <p className="text-lg font-semibold  text-ntl_black mb-2">
                            {feed.name}
                          </p>
                          <div className="flex flex-row text-ntl_orange">
                            <FaQuoteLeft size={80} className="-mt-10" />
                            <p className="font-normal text-base text-ntl_black text-center px-2">
                              {feed.content}
                            </p>
                            <FaQuoteRight size={80} className="mt-20 xsm:mt-32" />
                          </div>
                          <div className="flex flex-row mx-auto">
                            {Array.from(
                              { length: Math.floor(feed.rating) },
                              (_, index) => (
                                <ImStarFull
                                  key={index}
                                  className="w-4 h-4 text-ntl_orange"
                                />
                              )
                            )}
                            {feed.rating % 1 !== 0 && (
                              <ImStarHalf className="w-4 h-4 text-ntl_orange" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
