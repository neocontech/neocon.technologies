import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Servicebg from "../../public/assets/homepage/ourservicebg.png";
import { BiSquareRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Service = [
  {
    id: 1,
    name: "Fintech Solutions For Stock Market1",
  },
  {
    id: 2,
    name: "Fintech Solutions For Stock Market2",
  },
  {
    id: 3,
    name: "Fintech Solutions For Stock Market3",
  },
  {
    id: 4,
    name: "Fintech Solutions For Stock Market4",
  },
  {
    id: 5,
    name: "Fintech Solutions For Stock Market5",
  },
  {
    id: 6,
    name: "Fintech Solutions For Stock Market6",
  },
  {
    id: 7,
    name: "Fintech Solutions For Stock Market7",
  },
];

function OurService() {
  const splideRef = useRef(null);
  const [visibleSlides, setVisibleSlides] = useState(5);
  const [perPage, setPerPage] = useState(5);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setPerPage(1);
        setVisibleSlides(1);
      } else {
        setPerPage(5);
        setVisibleSlides(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (splideRef.current) {
        splideRef.current.go("+1");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("+2");
    }
  };

  const splideOptions = {
    type: "loop",
    perPage: perPage,
    perMove: 1,
    autoplay: true,
    interval: 2000,
    arrows: false,
    pagination: false,
    on: {
      moved: (newIndex) => {
        setActiveCardIndex(newIndex);
      },
    },
  };

  return (
    <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
      <div className="pb-10">
        <div className="flex justify-between">
          <div className="flex flex-row">
            <BiSquareRounded className="my-auto text-ntl_orange"/>
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
              Our <span className="text-ntl_orange"> Service</span>
            </p>
          </div>
          <FaArrowRight onClick={handleNextSlide} className="my-auto text-ntl_orange text-lg"/>
        </div>
        {/* card */}
        <div >
          <Splide
            options={splideOptions}
            ref={splideRef}
            onMoved={(splide) => setActiveCardIndex(splide.index)}
          >
            {Service.map((service, index) => (
              <SplideSlide key={index}>
                <div
                  className={`${
                    activeCardIndex === index && index !== 0
                      ? "bg-ntl_black text-ntl_white"
                      : "bg-gradient-to-b from-[#F5F5F5] to-[#F3F3F4] text-ntl_black"
                  } xsm:h-[330px] h-[400px] mx-2 rounded-3xl transition-colors  duration-500 ease-in-out`}
                >
                  <div className="">
                    <div className="flex justify-end">
                      <button className="flex flex-row pr-10 pt-4">
                        <p className="mx-4">View More</p>
                        <BsFillArrowRightCircleFill className="my-auto text-2xl" />
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute top-40 bottom-0 right-0 z-20">
                        <Image
                          src={Servicebg}
                          alt="Service bg .png"
                          className="w-auto hu-auto"
                        />
                      </div>
                      <div className="z-30 absolute top-32 xsm:top-20 bottom-0">
                        <p className="text-text_40 font-medium leading-tight px-10 xsm:px-0 xsm:pl-10 xsm:pr-16">
                          {service.name}
                        </p>
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
  );
}

export default OurService;
