import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Factor from "../Homepage/Factor";
const services = [
  {
    id: 1,
    name: "Fintech solutions ",
    content: "Fintech solutions for the stock market content",
  },
  {
    id: 2,
    name: "ERP solutions ",
    content: "ERP solutions for the stock market content",
  },
  {
    id: 3,
    name: "AI solutions ",
    content: "AI solutions for the stock market content",
  },
  {
    id: 4,
    name: "Data Solutions ",
    content: "Data Solutions for the stock market content",
  },
  {
    id: 5,
    name: "Cloud Solutions ",
    content: "Cloud Solutions for the stock market content",
  },
  {
    id: 6,
    name: "Network Solutions ",
    content: "Network Solutions for the stock market content",
  },
];

function AllService() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="grid grid-cols-4 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            {services.map((service, index) => (
              <div key={index}>
                <div className="service_bg h-full rounded-3xl">
                  <div className="p-6">
                    <div className="flex justify-end">
                      <Link href={`/services/${service.id}`}>
                        <button className="flex flex-row">
                          <p className="mx-4">View More</p>
                          <BsFillArrowRightCircleFill className="my-auto text-2xl" />
                        </button>
                      </Link>
                    </div>
                    <div>
                      <p className="text-text_40 font-medium text-ntl_black mt-10 xsm:mb-4 sm:mb-4 w-4/5 leading-none">
                        {service.name} for the stock market
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Factor />
      </div>
    </>
  );
}

export default AllService;
