import React from "react";
import { BiSquareRounded } from "react-icons/bi";
import Product from "./Product";
function OurProducts() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="flex flex-row pb-5">
            <BiSquareRounded className="my-auto text-ntl_orange" />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
              Our <span className="text-ntl_orange">Products</span>
            </p>
          </div>
          <Product />
        </div>
      </div>
    </>
  );
}

export default OurProducts;
