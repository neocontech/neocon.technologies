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