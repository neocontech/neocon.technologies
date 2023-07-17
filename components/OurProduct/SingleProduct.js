import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";

function SingleProduct({ product, otherProducts }) {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="company_bg">
            <div className="px-5">
              <p className="text-base font-normal text-ntl_black pt-10">
                Home/<span className="text-ntl_orange">Company</span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  Company
                </p>
                <p className="text-base text-ntl_gray">
                  At Neocon Technologies, we understand the unique challenges
                  faced by businesses operating in the stock market. We combine
                  our deep understanding of the industry with our expertise in
                  fintech to deliver tailored solutions that cater to the
                  specific needs of our clients.
                </p>
              </div>
            </div>
            <div className="border-dashed border-t-2 border-t-ntl_gray_2">
              <div className="p-5 xsm:px-0 xsm:pl-5">
                {otherProducts.map((s) => (
                  <Link legacyBehavior key={s.id} href={`/products/${s.id}`}>
                    <a className="text-blue-500 mr-4">{s.name}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
        <p>{product.content}</p>
      </div>
    </>
  );
}
export default SingleProduct;
