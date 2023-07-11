import React from "react";
import Image from "next/image";
import Customer from "../../public/assets/homepage/customer.png";
import People from "../../public/assets/homepage/people.png";
import Support from "../../public/assets/homepage/support.png";
import Factorbg from "../../public/assets/homepage/factorbg.png";
import { BiSquareRounded } from "react-icons/bi";

function Factor() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="flex flex-row">
            <BiSquareRounded className="my-auto text-ntl_orange" />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
              Factors that make us
              <span className="text-ntl_orange"> best option</span> for you are
            </p>
          </div>
          <div>
            <div className="flex grid-cols-3 gap-6 h-full xsm:overflow-x-scroll sm:overflow-x-scroll xsm:overflow-hidden sm:overflow-hidden">
              <div className="w-full h-[600] xsm:h-full sm:h-full rounded-3xl factor_bg xsm:min-w-full sm:min-w-full">
                <div className="flex flex-col">
                  <div className="p-5">
                    <p className="text-text_32 font-semibold text-ntl_black leading-none">
                      Customers <br />
                      <span className="text-ntl_orange"> First</span>
                    </p>
                    <p className="text-base font-normal">
                      At our company, we put our customers first. We understand
                      that the success of our business depends on the
                      satisfaction of our clients.
                    </p>
                  </div>
                  <div className="mx-auto ">
                    <div className=" ">
                      <Image
                        src={Customer}
                        alt="factor image .png"
                        className="w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[600] xsm:h-full sm:h-full rounded-3xl mx-5 factor_bg xsm:min-w-full sm:min-w-full">
                <div className="flex flex-col-reverse">
                  <div className="">
                    <div className="p-5 ">
                      <p className="text-text_32 font-semibold text-ntl_black leading-none">
                        Amazing
                        <br />
                        <span className="text-ntl_orange"> People</span>
                      </p>
                      <p className="text-base font-normal">
                        Our team is made up of some of the best and brightest
                        minds in the industry. Our developers, designers,
                        Marketer and project managers have years of experience
                        and are experts in their respective fields.
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto">
                    <Image
                      src={People}
                      alt="factor image .png"
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-[600] xsm:h-full sm:h-full rounded-3xl factor_bg xsm:min-w-full sm:min-w-full">
                <div className="flex flex-col ">
                  <div className="p-5">
                    <p className="text-text_32 font-semibold text-ntl_black leading-none">
                      Great
                      <br />
                      <span className="text-ntl_orange"> Support</span>
                    </p>
                    <p className="text-base font-normal">
                      We know that implementing new software solutions can be a
                      daunting task, which is why we offer great support to our
                      clients. Our team is always available to answer questions,
                      provide training, and troubleshoot any issues.
                    </p>
                  </div>
                  <div className="mx-auto">
                    <div className="">
                      <Image
                        src={Support}
                        alt="factor image .png"
                        className="w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Factor;
