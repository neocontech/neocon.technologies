import React, { useState, useRef, useEffect } from "react";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";
import { BiSquareRounded } from "react-icons/bi";
import Image from "next/image";
import Web from "../../public/assets/homepage/Web.png";
import Mobile from "../../public/assets/homepage/mobile.png";
import Feature from "../../public/assets/homepage/Feature.png";
import Trial from "../../public/assets/homepage/trial.png";
import LaptopS from "../../public/assets/homepage/laptopS.png";
import MobileS from "../../public/assets/homepage/mobileS.png";

const tabs = [
  {
    title: "OMS For Stock Market",
    image: LaptopS,
    content: [
      { src: Web, alt: "Web" },
      { src: Mobile, alt: "Mobile" },
      { src: Feature, alt: "Feature" },
      { src: Trial, alt: "Trial" },
    ],
  },
  {
    title: "OMS For Stock Market2",
    image: MobileS,
    content: [
      { src: Web, alt: "Web" },
      { src: Mobile, alt: "Mobile" },
      { src: Feature, alt: "Feature" },
      { src: Trial, alt: "Trial" },
    ],
  },
  {
    title: "OMS For Stock Market3",
    image: LaptopS,
    content: [
      { src: Web, alt: "Web" },
      { src: Mobile, alt: "Mobile" },
      { src: Feature, alt: "Feature" },
      { src: Trial, alt: "Trial" },
    ],
  },
  {
    title: "OMS For Stock Market3",
    image: LaptopS,
    content: [
      { src: Web, alt: "Web" },
      { src: Mobile, alt: "Mobile" },
      { src: Feature, alt: "Feature" },
      { src: Trial, alt: "Trial" },
    ],
  },
  {
    title: "OMS For Stock Market3",
    image: LaptopS,
    content: [
      { src: Web, alt: "Web" },
      { src: Mobile, alt: "Mobile" },
      { src: Feature, alt: "Feature" },
      { src: Trial, alt: "Trial" },
    ],
  },
  {
    title: "OMS For Stock Market3",
    image: LaptopS,
    content: [
      { src: Web, alt: "Web" },
      { src: Mobile, alt: "Mobile" },
      { src: Feature, alt: "Feature" },
      { src: Trial, alt: "Trial" },
    ],
  },
];
function OurProducts() {
  const [openTab, setOpenTab] = useState(1);
  const tabContainerRef = useRef(null);

  useEffect(() => {
    const containerWidth = tabContainerRef.current.clientWidth;
    const tabWidth = tabContainerRef.current.children[openTab - 1].clientWidth;
    const tabOffset = tabContainerRef.current.children[openTab - 1].offsetLeft;
    const scrollPosition = tabOffset - containerWidth / 2 + tabWidth / 2;
    tabContainerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [openTab]);

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
        <div className="flex flex-row pb-5">
            <BiSquareRounded className="my-auto text-ntl_orange" />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
              Our <span className="text-ntl_orange"> Products</span>
            </p>
          </div>
          <div>
            <ul
              className="flex flex-row text-2xl font-semibold w-full overflow-x-scroll scrollbar-hide"
              ref={tabContainerRef}
            >
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className="xsm:min-w-max sm:min-w-max min-w-fit mx-2 "
                >
                  <a
                    className={`flex flex-row w-full  h-full ${
                      openTab === index + 1
                        ? "text-ntl_orange "
                        : "text-ntl_black hover:text-ntl_orange duration-700"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabClick(index + 1);
                    }}
                    href={`#link${index + 1}`}
                    role="tablist"
                  >
                    <div
                      className={`flex flex-col p-5 rounded-3xl   xsm:mx-2 xsm:w-60 sm:w-60 w-full h-full ${
                        openTab === index + 1
                          ? "feedback_bg_b "
                          : "feedback_bg hover:feedback_bg_b duration-700"
                      }`}
                    >
                      <div className="flex justify-end">
                        <button className="flex flex-row pt-4">
                          <p className="mx-4">View More</p>

                          {openTab === index + 1 ? (
                            <BsFillArrowDownRightCircleFill className="my-auto mx-2 " />
                          ) : (
                            <BsFillArrowRightCircleFill className="my-auto mx-2" />
                          )}
                        </button>
                      </div>
                      <div className="flex justify-between mt-20 xsm:mt-10">
                        <div
                          className={`text-text_40 xsm:text-text_32 sm:text-text_32 font-medium  ${
                            openTab === index + 1
                              ? "text-ntl_white"
                              : "text-ntl_black  duration-700"
                          } leading-none w-9/12 xsm:w-full sm:w-full my-auto`}
                        >
                          <p>{tab.title}</p>
                        </div>
                        <div className=" xsm:w-full sm:w-full my-auto">
                          <Image
                            src={tab.image}
                            alt="case study .png"
                            className="w-60 h-auto mb-0 pb-0 my-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-5">
              <div>
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={openTab === index + 1 ? "block" : "hidden"}
                    id={`link${index + 1}`}
                  >
                    <div className="grid grid-cols-4 xsm:grid-cols-1 sm:grid-cols-1 gap-2">
                      {tab.content.map((image, index) => (
                        <div key={index} className="  w-full">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            className=" mx-auto mb-0 pb-0 w-auto h-80 rounded-3xl xsm:h-auto xsm:w-80 sm:h-auto sm:w-80"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProducts;
