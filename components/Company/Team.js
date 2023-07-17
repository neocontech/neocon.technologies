import React from "react";
import Image from "next/image";
import Zubair from "../../public/assets/company/zubair-hasan.png";
import Kalim from "../../public/assets/company/kalim-amzad.png";
import Selim from "../../public/assets/company/Selim-Azad.png";
const TeamList = [
  {
    id: 0,
    name: "Zubair Hasan",
    designation: "Director and Chief Technology Officer",
    comment:
      "Zubair Hasan, our Director, and Chief Technology Officer, is a dynamic technology enthusiast with a passion for Fintech, software development, server infrastructure, and cyber security. With over a decade of experience in the industry, Zubair has led numerous tech firms and international tech teams, consistently pushing the boundaries of innovation and technical excellence. His strategic vision and deep understanding of technology have been instrumental in driving Neocon Technologies' growth and success in the fiercely competitive technology landscape.",
    image: Zubair,
  },
  {
    id: 1,
    name: "Md. Kalim Amzad Chy",
    designation: "Director and Head of Analytics",
    comment:
      "Md. Kalim Amzad Chy, our Director and Head of Analytics, is a seasoned technology professional with a profound passion for data science. With years of experience in the industry, Kalim has established himself as a thought leader in the field of analytics. His dedication to technology and data science is reflected in his research papers published in top-tier journals worldwide. As the head of analytics at Neocon Technologies, Kalim is committed to utilizing his expertise to drive the company's growth and innovation, enabling our clients to make data-driven decisions in the stock market.",
    image: Kalim,
  },
  {
    id: 2,
    name: "Muhammad Selim Azad",
    designation: "Chief Executive Officer",
    comment:
      "Muhammad Selim Azad, our CEO, is a true visionary with a deep understanding of the industry and a passion for technology and management. With his expertise and a keen eye for innovation, Selim Azad has been instrumental in driving Neocon Technologies' success and growth. His infectious enthusiasm for technology and management fuels his drive to explore new and exciting ways to push the boundaries of what is possible. Under his leadership, Neocon Technologies is well-positioned to continue thriving and growing in the rapidly evolving technological landscape of the stock market.",
    image: Selim,
  },
];

function Team({ data }) {
  // console.log(data);
  return (
    <>
      <div>
        <div>
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            <div>
              <p className="text-text_41 xsm:text-3xl sm:text-3xl font-semibold text-ntl_black">
                “We are like a <span className="text-ntl_orange"> family</span>
              </p>
              <p className="text-base font-normal text-ntl_gray">
                Neocon Technologies Limited takes pride in its exceptional
                leadership team, driving innovation and spearheading the
                company's success in providing cutting-edge solutions for the
                stock market.
              </p>
            </div>
            <div className="col-span-2 xsm:col-span-1 sm:col-span-1 border-2 border-t-0 border-b-0 border-dashed border-ntl_orange">
              {TeamList.map((team, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full flex  mb-10  ${
                      team.id % 2 === 0
                        ? "flex-row xsm:flex-col sm:flex-col "
                        : "flex-row-reverse xsm:flex-col sm:flex-col"
                    }`}
                  >
                    <div className="my-auto w-3/5 xsm:w-full sm:w-full">
                      <div
                        className={` flex ${
                          team.id % 2 === 0
                            ? " justify-start xsm:pb-5 sm:pb-5"
                            : "justify-end xsm:pb-5 sm:pb-5"
                        }`}
                      >
                        <div className="px-5">
                          <p className="text-base text-ntl_orange font-semibold pb-2">
                            {team.name}
                          </p>
                          <div>
                            <div className="text-base font-normal text-ntl_black mb-3">
                              {/* <div
                                dangerouslySetInnerHTML={{
                                  __html: team.about,
                                }}
                              ></div> */}
                              <p className="pb-2">{team.comment}</p>
                            </div>
                          </div>

                          <p className="text-sm font-normal text-ntl_gray">
                            {team.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`my-auto w-2/5 xsm:w-full sm:w-full flex xsm:justify-center sm:justify-center${
                        team.id % 2 === 0 ? "justify-end " : "justify-start"
                      }`}
                    >
                      <Image
                        // src={
                        //   process.env.NEXT_PUBLIC_BACKEND_URL +
                        //   "/storage/" +
                        //   team.image
                        // }
                        src={team.image}
                        alt="team image"
                        width={300}
                        height={300}
                        className="my-auto  rounded-lg w-auto h-auto 2xl:w-full xsm:w-full sm:w-full border-2 border-ntl_orange "
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

export default Team;
