import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Applayout from "@/components/Layout/Applayout";
import SingleService from "@/components/OurService/SingleService";

export default function SingleServicePage() {
  const router = useRouter();
  const { name } = router.query;
  const [service, setService] = useState(null);

  useEffect(() => {
    async function fetchServiceData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service?name=${name}`
        );
        if (!response.ok) {
          throw new Error("Service not found.");
        }
        const serviceData = await response.json();
        setService(serviceData);
        console.log(serviceData)
      } catch (error) {
        console.error("Error fetching service:", error);
        setService(null);
      }
    }

    if (name) {
      fetchServiceData();
    }
  }, [name]);

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <Applayout>
      <SingleService service={service} />
    </Applayout>
  );
}








// import Image from "next/image";
// import Service1 from "../../public/assets/service/service1.png";
// import Service2 from "../../public/assets/service/service2.png";
// import Service3 from "../../public/assets/service/service3.png";

// const services = [
//   {
//     id: 1,
//     name: "Fintech solutions",
//     content: "Fintech solutions for the stock market content",
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
//   },
//   {
//     id: 4,
//     name: "Data Solutions ",
//     content: "Data Solutions for the stock market content",
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
//     id: 5,
//     name: "Cloud Solutions ",
//     content: "Cloud Solutions for the stock market content",
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
//     id: 6,
//     name: "Network Solutions ",
//     content: "Network Solutions for the stock market content",
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
// ];