import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";
import Contact from "../Homepage/Contact";

const SingleService = ({ service }) => {
  const [openTab, setOpenTab] = useState(1);

  // Check if the service data is available or show a loading state
  if (!service) {
    return <div>Loading...</div>;
  }

  // Get the service data based on the openTab value
  const currentService = service.find((item) => item.id === openTab);

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
          <div className="company_bg">
            <div className="px-5">
              <p className="text-base font-normal text-ntl_black pt-10">
                Home/
                <span className="text-ntl_orange">
                  {currentService.name.length > 0
                    ? currentService.name[0].value
                    : ""}
                </span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  {currentService.name.length > 0
                    ? currentService.name[0].value
                    : ""}
                </p>

                <div className="text-base text-ntl_gray"></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: currentService.subDesc,
                  }}
                ></div>
              </div>
            </div>
            <div className="border-dashed border-t-2 border-t-ntl_gray_2">
              <div
                className="p-5 xsm:px-0 xsm:pl-5 flex flex-row overflow-x-scroll scrollbar-hide"
                ref={tabContainerRef}
              >
                {/* Rendering the tabs dynamically based on the 'service' array */}
                {service.map((item) => (
                  <Link
                    key={item.id}
                    href={`/services/${item.name[0].value}`}
                    legacyBehavior
                  >
                    <a
                      className={`flex flex-row min-w-max mr-4 ${
                        item.id === openTab
                          ? "text-ntl_orange"
                          : "text-ntl_black"
                      }`}
                      onClick={() => handleTabClick(item.id)}
                    >
                      {item.name.length > 0 ? item.name[0].value : ""} for the
                      stock market
                      {item.id === openTab ? (
                        <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
                      ) : (
                        <BsFillArrowRightCircleFill className="my-auto mx-2" />
                      )}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10 leading-none">
          <div
            dangerouslySetInnerHTML={{
              __html: currentService.description,
            }}
          ></div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default SingleService;
