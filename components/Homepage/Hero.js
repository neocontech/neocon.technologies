import React from "react";
import Image from "next/image";
// import smallhero from "../../public/assets/homepage/smallhoemheroasset.png";
import largehero2 from "../../public/assets/homepage/largehomeheroasset2.png";
import largeHomehero from "../../public/assets/homepage/largehomeheroasset.png";
// import smallhero2 from "../../public/assets/homepage/smallhomeheroasset2.png";
// import Partner1 from "../../public/assets/homepage/kabirlogo.png";
// import Partner1 from "../../public/assets/homepage/ucblogo.png";

function Hero() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="">
          <div className="landing_bg">
            <div className="flex justify-between xsm:flex-col-reverse sm:flex-col-reverse pt-40 xsm:pt-16 pb-16 px-5">
              <div className="flex flex-row relative my-auto w-full xsm:pt-10 sm:pt-10">
                <div
                  className="absolute z-0  left-80 xsm:left-40
                 sm:left-40"
                >
                  <Image
                    src={largehero2}
                    alt="large hero .png"
                    className="w-auto h-auto"
                  />
                </div>
                <div className="text-text_84 xsm:text-text_41 sm:text-text_41 text-ntl_black font-semibold leading-tight z-10 ">
                  <p className="text-ntl_orange">Fintech</p>
                  <p>Development</p>
                  <p>Platform</p>
                  <button className="bg-ntl_black rounded-2xl text-ntl_white ">
                    <p className="text-base py-3 px-6">get in touch</p>
                  </button>
                </div>
              </div>
              <div className="w-3/5 xsm:w-full sm:w-full">
                <Image
                  src={largeHomehero}
                  alt="large home hero .png"
                  className="w-auto h-auto"
                />
              </div>
            </div>
            <p className="text-sm text-ntl_black font-medium px-5 pb-5">
              Trusted by over <span className="text-ntl_orange"> 100+</span>
              Stock Brokerage House <br />
              and Enterprise Companies:
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
