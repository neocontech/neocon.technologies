import React from "react";
import Image from "next/image";
import Servicebg from "../../public/assets/homepage/ourservicebg.png";
import { BiSquareRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function OurService() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <BiSquareRounded />
              <p>Our Service</p>
            </div>
            <FaArrowRight />
          </div>
          {/* card */}
          <div className="bg-gradient-to-b from-[#F5F5F5] to-[#F3F3F4]">
            <div className="p-3">
              <div className="flex justify-end">
                <button className="flex flex-row">
                  <p>View More</p>
                  <BsFillArrowRightCircleFill />
                </button>
              </div>
              <div>
                <div>
                  Fintech <br /> Solutions <br />
                  For <br />
                  Stock Market
                </div>
                <div>
                  <Image
                    src={Servicebg}
                    alt="Service bg .png"
                    className="w-auto hu-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurService;
