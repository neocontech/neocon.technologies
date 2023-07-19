import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import { BiSquareRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Oms from "../../public/assets/homepage/Oms.png";
import Ai from "../../public/assets/homepage/Ai.png";
const CaseList = [
  {
    id: 1,
    image: Oms,
    name: "Order Management System [OMS]",
  },
  {
    id: 2,
    image: Ai,
    name: "Artificial Intelligence Trade Bot",
  },
  {
    id: 3,
    image: Oms,
    name: "Order Management System [OMS]",
  },
  {
    id: 4,
    image: Ai,
    name: "Artificial Intelligence Trade Bot",
  },
];
function CaseStudy() {
  const splideOptions = {
    type: "loop",
    perPage: 2,
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
        perPage: 2,
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
              Case <span className="text-ntl_orange"> Studies</span>
            </p>
          </div>
          <div>
            <div className="flex flex-row xsm:flex-col sm:flex-col">
              <div className="w-10/12 xsm:w-full sm:w-full">
                <div>
                  <Splide options={splideOptions}>
                    {CaseList.map((casestudy, index) => (
                      <SplideSlide key={index}>
                        <div className="h-full">
                          <div className="flex flex-col p-5 rounded-3xl feedback_bg mx-5 xsm:mx-2 h-full ">
                            <div className="flex justify-end">
                              <button className="flex flex-row pt-4">
                                <p className="mx-4">View More</p>
                                <BsFillArrowRightCircleFill className="my-auto text-2xl" />
                              </button>
                            </div>
                            <div className="flex justify-between mt-20 xsm:mt-10">
                              <div className="text-text_40 xsm:text-text_32 sm:text-text_32 font-medium text-ntl_black leading-none w-9/12 xsm:w-full sm:w-full my-auto">
                                <p>{casestudy.name}</p>
                              </div>
                              <div className="w-3/12 xsm:w-full sm:w-full my-auto">
                                <Image
                                  src={casestudy.image}
                                  alt="case study .png"
                                  className="w-auto h-auto mb-0 pb-0 my-auto"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
              </div>
              <div className="w-2/12 xsm:w-full sm:w-full xsm:mt-5 sm:mt-5">
                <div className="case_bg rounded-3xl">
                  <div className="text-sm text-ntl_white px-5 pb-10 pt-40  2xl:pt-44 2xl:pb-5 xsm:pt-20 sm:pt-5 ">
                    <p>click here to</p>
                    <p className="text-ntl_orange text-text_28">View All</p>
                    <div className="flex justify-between">
                      <p>case studies</p>
                      <FaArrowRight className="my-auto text-ntl_orange text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudy;
