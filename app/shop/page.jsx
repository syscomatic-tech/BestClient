
import { fetchApi } from "@/utils/FetchApi";
import Shop from "./Shop";

export default async function Page() {
  // const products = await fetchApi("/product/getAllProducts", "GET");
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/product/getAllProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((data) => data.products)
    .catch((error) => console.error(error));

  // console.log(products);
  return (
    <main>
      <Shop products={products} />
      {/* <Shop /> */}
    </main>
  );
}
