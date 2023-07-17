import React from "react";
import Image from "next/image";
import Alamgir from "../../public/assets/company/Alamgir-Kabir.png";
import Rowshan from "../../public/assets/company/Rowshan-Ara.png";
import Shadman from "../../public/assets/company/Shadman-Kabir.png";
import Sabbria from "../../public/assets/company/Sabbria-Kabir.png";
const DirectorList = [
  {
    id: 0,
    name: "ROWSHAN ARA ALAM",
    designation: "Chairperson",
    comment:
      "Our Honorable Chairperson Rowshan Ara Alam is highly respected and passionate in the technology industry, serving as the Chairperson of Neocon Group. With her dynamic leadership, she has steered the company towards achieving its strategic goals. A true visionary, she has a keen understanding of the rapidly changing technology landscape and is always looking for new and innovative ways to drive growth and create value for the company's stakeholders.",
    comment2:
      "Hard work is the foundation of any successful organization. It is the unwavering dedication to excellence, the determination to achieve greatness, and the perseverance to overcome challenges that define us as individuals and as a company.",

    image: Rowshan,
  },
  {
    id: 1,
    name: "MOHAMMED ALAMGIR KABIR",
    designation: "Chairman",
    comment:
      "Under the exceptional leadership of our Honorable Chairman, Mohammed Alamgir Kabir has embarked on a remarkable journey, transforming from its humble beginnings into a leading conglomerate encompassing diverse businesses such as software development, stock market brokerage, data centers, internet services, and more.",
    comment2:
      "At Neocon Technologies Limited, we are committed to delivering cutting-edge technology solutions that empower our clients to achieve their business goals in the stock market. We firmly believe that our success is directly linked to the success of our clients. Therefore, we prioritize building long-lasting partnerships based on trust, collaboration, and mutual growth. Through our advanced Order Management Systems (OMS), fintech services, and Enterprise Resource Planning (ERP) solutions, we drive innovation and help our clients streamline their operations, enhance risk management, and unlock new opportunities for growth. Partner with Neocon Technologies Limited and experience the difference of a dedicated technology partner committed to your success in the stock market.",
    image: Alamgir,
  },

  {
    id: 2,
    name: "MOHAMMED SHADMAN KABIR",
    designation: "Managing Director",
    comment:
      "Honorable Managing Director, Mohammed Shadman Kabir is a passionate leader who provides a modern vision to the company. He completed his graduation from the University of New South Wales, Sydney, Australia, in the field of Accounting and Marketing. He has also pursued an offshore Professional Year from Navitas Professional Australia.",
    comment2:
      "At Neocon Technologies Limited, we remain steadfast in our dedication to delivering cutting-edge solutions to our esteemed clients. Our expertise lies in providing state-of-the-art Order Management Systems (OMS), fintech services, and Enterprise Resource Planning (ERP) solutions tailored specifically for the stock market. Through our innovative offerings, we empower businesses to streamline their operations, enhance risk management, and unlock new opportunities for growth.",
    image: Shadman,
  },
  {
    id: 3,
    name: "SABBRIA KABIR",
    designation: "Director",
    comment:
      "Honorable Director Sabbria Kabir is a potential leader. She is graduating from Taylor's University, Malaysia. Besides being an ambitious individual she has a broader mindset in business.",
    comment2:
      "We firmly believe that Innovative technologies will build a productive business system for overall growth and that it is only through the power of technology that we can truly empower people. The hard work and dedication of each and every member of the Neocon Group family that we have been able to achieve.",
    image: Sabbria,
  },
];

function Director({ data }) {
  // console.log(data);
  return (
    <>
      <div>
        <div>
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            <div>
              <p className="text-text_41 xsm:text-3xl sm:text-3xl font-semibold text-ntl_black">
                “Board of <span className="text-ntl_orange"> Director</span>
              </p>
              <p className="text-base font-normal text-ntl_gray">
              A board of directors of neocon technologies is responsible for setting the strategic direction, overseeing its management, and ensuring that it complies with applicable laws and regulations.
              </p>
            </div>
            <div className="col-span-2 xsm:col-span-1 sm:col-span-1">
              {DirectorList.map((director, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full flex  mb-10 ${
                      director.id % 2 === 0
                        ? "flex-row xsm:flex-col sm:flex-col "
                        : "flex-row-reverse xsm:flex-col sm:flex-col"
                    }`}
                  >
                    <div className="my-auto w-3/5 xsm:w-full sm:w-full">
                      <div
                        className={` flex ${
                          director.id % 2 === 0
                            ? " justify-start xsm:pb-5 sm:pb-5"
                            : "justify-end xsm:pb-5 sm:pb-5"
                        }`}
                      >
                        <div className="px-5 xsm:px-0 sm:px-0">
                          <div className="border-l-2 border-ntl_orange">
                            <div className="text-base font-normal text-ntl_black p-2 mb-3">
                              {/* <div
                                dangerouslySetInnerHTML={{
                                  __html: director.about,
                                }}
                              ></div> */}
                              <p className="pb-2">{director.comment}</p>
                              <p>"{director.comment2}"</p>
                            </div>
                          </div>
                          <div className="flex flex-row xsm:flex-col sm:flex-col">
                            <p className="text-base text-ntl_orange font-semibold">
                              {director.name}
                            </p>
                            <p className="text-sm font-normal text-ntl_gray my-auto mx-5 xsm:mx-0 sm:mx-0  mb-0">
                              {director.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto w-2/5 xsm:w-full sm:w-full">
                      <Image
                        // src={
                        //   process.env.NEXT_PUBLIC_BACKEND_URL +
                        //   "/storage/" +
                        //   director.image
                        // }
                        src={director.image}
                        alt="director image"
                        width={300}
                        height={300}
                        className="my-auto mx-auto rounded-lg w-auto h-auto"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Director;
