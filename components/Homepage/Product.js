import React, { useState, useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";
import Image from "next/image";
import Web from "../../public/assets/homepage/Web.png";
import Mobile from "../../public/assets/homepage/mobile.png";
import Feature from "../../public/assets/homepage/Feature.png";
import Trial from "../../public/assets/homepage/trial.png";
import LaptopS from "../../public/assets/homepage/laptopS.png";
import MobileS from "../../public/assets/homepage/mobileS.png";

const tabs = [
  {
    id: 0,
    title: "OMS for the stock market",
    image: LaptopS,
    content: [
      { src: Web, alt: "Web" },
      { src: Mobile, alt: "Mobile" },
      { src: Feature, alt: "Feature" },
      { src: Trial, alt: "Trial" },
    ],
  },
  {
    id: 1,
    title: "ERP for the stock market",
    image: MobileS,
    content: [
      { src: Web, alt: "Web" },
      { src: Mobile, alt: "Mobile" },
      { src: Feature, alt: "Feature" },
      { src: Trial, alt: "Trial" },
    ],
  },
  {
    id: 2,
    title: "AI Trade Bot for the stock market",
    image: LaptopS,
    content: [
      { src: Feature, alt: "Feature" },
      { src: Trial, alt: "Trial" },
      { src: Trial, alt: "Trial" },
    ],
  },
];

const splideOptions = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  autoplay: false,
  arrows: false,
  pagination: false,
  rewind: false,
};

function Product() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [numVisibleCards, setNumVisibleCards] = useState(3); 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNumVisibleCards(1);
      } else {
        setNumVisibleCards(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial number of visible cards

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };

  return (
    <>
      <div>
        <div>
          <Splide options={{ ...splideOptions, perPage: numVisibleCards }}>
            {tabs.map((product, index) => (
              <SplideSlide key={index}>
                <div
                  className={`${
                    activeCardIndex === index
                      ? "feedback_bg_b text-ntl_white"
                      : "feedback_bg text-ntl_black"
                  } h-[300px]  mx-2 rounded-3xl transition-colors duration-500 ease-in-out cursor-pointer`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="p-6">
                    <div className="flex justify-end">
                      <button className="flex flex-row ">
                        <p className="mx-4">View More</p>
                        {activeCardIndex === index ? (
                          <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
                        ) : (
                          <BsFillArrowRightCircleFill className="my-auto mx-2" />
                        )}
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute bottom-0 top-0">
                        <div className="flex justify-between mt-10">
                          <p className="text-text_40 font-medium leading-tight w-full">
                            {product.title}
                          </p>
                          <div className="my-auto w-full">
                            <Image
                              src={product.image}
                              alt="product image .png"
                              className="w-auto h-auto mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="pt-5">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={activeCardIndex === index ? "block" : "hidden"}
              id={`link${index + 1}`}
            >
              <div className="grid grid-cols-4 xsm:grid-cols-1 sm:grid-cols-1 gap-2">
                {tab.content.map((image, index) => (
                  <div key={index} className="w-full mx-auto">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="mx-auto mb-0 pb-0 w-auto h-80 rounded-3xl xsm:h-auto xsm:w-80 sm:h-auto sm:w-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
