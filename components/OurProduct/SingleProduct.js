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

export default function SingleProduct({ product, allProducts  }) {
  const tabContainerRef = useRef(null);
  const [openTab, setOpenTab] = useState(1);

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
                Home/<span className="text-ntl_orange">{product.name}</span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  {product.name}
                </p>
                <p className="text-base text-ntl_gray">{product.content}</p>
              </div>
            </div>
            <div className="border-dashed border-t-2 border-t-ntl_gray_2">
              <div
                className="p-5 xsm:px-0 xsm:pl-5 flex flex-row overflow-x-scroll scrollbar-hide"
                ref={tabContainerRef}
              >
                {allProducts.map((s) => (
                  <Link
                    legacyBehavior
                    className=""
                    key={s.id}
                    href={`/products/${s.id}`}
                  >
                    <a
                      className={`flex flex-row min-w-max mr-4 ${
                        s.id === product.id
                          ? "text-ntl_orange"
                          : "text-ntl_black"
                      }`}
                      onClick={() => handleTabClick(s.id)}
                    >
                      {s.name} for the stock market
                      {s.id === product.id ? (
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
        <div className="pb-10">
          {product.details.map((details) => (
            <div
              key={details.id}
              className={`w-full flex mb-10 ${
                details.id % 2 === 1
                  ? "flex-row xsm:flex-col sm:flex-col"
                  : "flex-row-reverse xsm:flex-col sm:flex-col"
              }`}
            >
              <div className="my-auto w-3/5 xsm:w-full sm:w-full">
                <div
                  className={`flex ${
                    details.id % 2 === 0
                      ? "justify-start xsm:pb-5 sm:pb-5"
                      : "justify-end xsm:pb-5 sm:pb-5"
                  }`}
                >
                  <div className="px-5 xsm:px-0 sm:px-0">
                    <div>
                      <div className="text-base font-normal text-ntl_black ">
                        <p className=" text-text_41 xsm:text-2xl sm:text-2xl font-bold leading-none pb-5 w-3/5 xsm:w-full sm:w-full">
                          Run Your Entire Web Presence In{" "}
                          <span className="text-ntl_orange">
                            {details.header}
                          </span>
                        </p>
                        <p>{details.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-auto w-2/5 xsm:w-full sm:w-full">
                <Image
                  src={details.image}
                  alt="service image"
                  width={300}
                  height={300}
                  className="my-auto mx-auto rounded-lg w-auto h-auto 2xl:w-full xsm:w-full sm:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
}
