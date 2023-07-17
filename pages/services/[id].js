import Applayout from "@/components/Layout/Applayout";
import SingleService from "@/components/OurService/SingleService";
import { useRouter } from "next/router";

const services = [
  {
    id: 1,
    name: "Fintech solutions ",
    content: "Fintech solutions for the stock market content",
  },
  {
    id: 2,
    name: "ERP solutions ",
    content: "ERP solutions for the stock market content",
  },
  {
    id: 3,
    name: "AI solutions ",
    content: "AI solutions for the stock market content",
  },
  {
    id: 4,
    name: "Data Solutions ",
    content: "Data Solutions for the stock market content",
  },
  {
    id: 5,
    name: "Cloud Solutions ",
    content: "Cloud Solutions for the stock market content",
  },
  {
    id: 6,
    name: "Network Solutions ",
    content: "Network Solutions for the stock market content",
  },
];

export default function SingleServicePage() {
  const router = useRouter();
  const { id } = router.query;
  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return <div>Service not found.</div>;
  }

  const otherServices = services.filter((s) => s.id !== Number(id));

  return (
    <>
      <Applayout>
        <SingleService service={service} otherServices={otherServices} />
      </Applayout>
    </>
  );
}
