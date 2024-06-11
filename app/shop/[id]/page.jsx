import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { fetchApi } from "@/utils/FetchApi";

export async function generateMetadata({ params, searchParams }) {
  const id = params.id;
  const res = await fetchApi(`/product/getProductById/${id}`, "GET");
  const product = await res?.data;
  return {
    title: product?.seo?.productTitle,
    description: product?.seo?.prodDescription,
  };
}

export default async function Page({ params }) {
  const id = params.id;
  const res = await fetchApi(`/product/getProductById/${id}`, "GET");
  const product = await res?.data;
  return (
    <>
      <SingleProduct product={product} />
    </>
  );
}
