// import SingleProduct from "@/components/OurProduct/SingleProduct";
// import { useRouter } from "next/router";

// const products = [
//   { id: 1, name: "Product 1", content: "Product 1 content" },
//   { id: 2, name: "Product 2", content: "Product 2 content" },
//   { id: 3, name: "Product 3", content: "Product 3 content" },
//   // Add more products as needed
// ];

// export default function SingleProductPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const product = products.find((s) => s.id === Number(id));

//   if (!product) {
//     return <div>product not found.</div>;
//   }

//   const otherProducts = products.filter((s) => s.id !== Number(id));

//   return (
//     <>
    
//       <SingleProduct product={product} otherProducts={otherProducts} />
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Service1 from "../../public/assets/service/service1.png";
// import Service2 from "../../public/assets/service/service2.png";
// import Service3 from "../../public/assets/service/service3.png";
import { useRouter } from "next/router";
import Applayout from "@/components/Layout/Applayout";
import SingleCasestudy from "@/components/OurCaseSudy/SingleCasestudy";


// const casestudys = [
//   {
//     id: 1,
//     name: "OMS",
//     content: "OMS for the stock market",
//     details: [
//       {
//         id: 0,
//         image: Service1,
//         header: " One Place.",
//         content:
//           "Lorem ipsum dolor sit amet consectetur. Donec vestibulum netus purus ut sodales orci a amet. Ipsum in risus consectetur viverra. Vitae mauris pellentesque fermentum metus. Diam id in ut neque magna.",
//       },
//       {
//         id: 1,
//         image: Service2,
//         header: " One Place.",
//         content:
//           "Lorem ipsum dolor sit amet consectetur. Donec vestibulum netus purus ut sodales orci a amet. Ipsum in risus consectetur viverra. Vitae mauris pellentesque fermentum metus. Diam id in ut neque magna.",
//       },
//       {
//         id: 2,
//         image: Service3,
//         header: " One Place.",
//         content:
//           "Lorem ipsum dolor sit amet consectetur. Donec vestibulum netus purus ut sodales orci a amet. Ipsum in risus consectetur viverra. Vitae mauris pellentesque fermentum metus. Diam id in ut neque magna.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "ERP solutions ",
//     content: "ERP solutions for the stock market content",
//     details: [
//       {
//         id: 0,
//         image: Service1,
//         header: " One Place.",
//         content:
//           "Lorem ipsum dolor sit amet consectetur. Donec vestibulum netus purus ut sodales orci a amet. Ipsum in risus consectetur viverra. Vitae mauris pellentesque fermentum metus. Diam id in ut neque magna.",
//       },
//       {
//         id: 1,
//         image: Service2,
//         header: " One Place.",
//         content:
//           "Lorem ipsum dolor sit amet consectetur. Donec vestibulum netus purus ut sodales orci a amet. Ipsum in risus consectetur viverra. Vitae mauris pellentesque fermentum metus. Diam id in ut neque magna.",
//       },
//       {
//         id: 2,
//         image: Service3,
//         header: " One Place.",
//         content:
//           "Lorem ipsum dolor sit amet consectetur. Donec vestibulum netus purus ut sodales orci a amet. Ipsum in risus consectetur viverra. Vitae mauris pellentesque fermentum metus. Diam id in ut neque magna.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "AI solutions ",
//     content: "AI solutions for the stock market content",
//     details: [
//       {
//         id: 0,
//         image: Service1,
//         header: " One Place.",
//         content:
//           "Lorem ipsum dolor sit amet consectetur. Donec vestibulum netus purus ut sodales orci a amet. Ipsum in risus consectetur viverra. Vitae mauris pellentesque fermentum metus. Diam id in ut neque magna.",
//       },
//       {
//         id: 1,
//         image: Service2,
//         header: " One Place.",
//         content:
//           "Lorem ipsum dolor sit amet consectetur. Donec vestibulum netus purus ut sodales orci a amet. Ipsum in risus consectetur viverra. Vitae mauris pellentesque fermentum metus. Diam id in ut neque magna.",
//       },
//       {
//         id: 2,
//         image: Service3,
//         header: " One Place.",
//         content:
//           "Lorem ipsum dolor sit amet consectetur. Donec vestibulum netus purus ut sodales orci a amet. Ipsum in risus consectetur viverra. Vitae mauris pellentesque fermentum metus. Diam id in ut neque magna.",
//       },
//     ],
//   }
// ];

export default function SingleCasestudyPage() {
  const router = useRouter();
  const { name } = router.query;
  const [casestudy, setCaseStudy] = useState(null);

  useEffect(() => {
    async function fetchCaseData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/case-study?name=${name}`
        );
        if (!response.ok) {
          throw new Error("casestudy not found.");
        }
        const casestudyData = await response.json();
        setCaseStudy(casestudyData);
        console.log(casestudyData)
      } catch (error) {
        console.error("Error fetching casestudy:", error);
        setCaseStudy(null);
      }
    }

    if (name) {
      fetchCaseData();
    }
  }, [name]);

  if (!casestudy) {
    return <div>casestudy not found.</div>;
  }


  return (
    <Applayout>
      
      <SingleCasestudy casestudy={casestudy}/>
      
    </Applayout>
  );
}
