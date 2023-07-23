// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowDownRightCircleFill,
// } from "react-icons/bs";

// function SingleProduct({ product, otherProducts }) {
//   return (
//     <>
//       <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
//         <div className="pb-10">
//           <div className="company_bg">
//             <div className="px-5">
//               <p className="text-base font-normal text-ntl_black pt-10">
//                 Home/<span className="text-ntl_orange">Company</span>
//               </p>
//               <div className="pt-20 pb-5">
//                 <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
//                   Company
//                 </p>
//                 <p className="text-base text-ntl_gray">
//                   At Neocon Technologies, we understand the unique challenges
//                   faced by businesses operating in the stock market. We combine
//                   our deep understanding of the industry with our expertise in
//                   fintech to deliver tailored solutions that cater to the
//                   specific needs of our clients.
//                 </p>
//               </div>
//             </div>
//             <div className="border-dashed border-t-2 border-t-ntl_gray_2">
//               <div className="p-5 xsm:px-0 xsm:pl-5">
//                 {otherProducts.map((s) => (
//                   <Link legacyBehavior key={s.id} href={`/products/${s.id}`}>
//                     <a className="text-blue-500 mr-4">{s.name}</a>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
//         <p>{product.content}</p>
//       </div>
//     </>
//   );
// }
// export default SingleProduct;
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";
import Contact from "../Homepage/Contact";

export default function SingleCasestudy({ casestudy }) {
  const [openTab, setOpenTab] = useState(1);

  // Check if the casestudy data is available or show a loading state
  if (!casestudy) {
    return <div>Loading...</div>;
  }
  // Get the casestudy data based on the openTab value
  const currentCasestudy = casestudy.find((item) => item.id === openTab);
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
                  {currentCasestudy.name.length > 0
                    ? currentCasestudy.title
                    : ""}
                </span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  {currentCasestudy.name.length > 0
                    ? currentCasestudy.name
                    : ""}
                </p>

                <div className="text-base text-ntl_gray"></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: currentCasestudy.subDesc,
                  }}
                ></div>
              </div>
            </div>
            <div className="border-dashed border-t-2 border-t-ntl_gray_2">
              <div
                className="p-5 xsm:px-0 xsm:pl-5 flex flex-row overflow-x-scroll scrollbar-hide"
                ref={tabContainerRef}
              >
                {/* Rendering the tabs dynamically based on the 'casestudy' array */}
                {casestudy.map((item) => (
                  <Link
                    key={item.id}
                    href={`/casestudy/${item.name}`}
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
                      {item.title.length > 0 ? item.title : ""} for the
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
          className="description-content"
            dangerouslySetInnerHTML={{
              __html: currentCasestudy.description,
            }}
          ></div>
        </div>
      </div>
      <Contact />
    </>
  );
}
