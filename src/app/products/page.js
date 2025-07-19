import { getProduct } from "@/api/product";
import ProductCard from "@/components/products/Card";
import React from "react";

const productPage = async () => {
  const response = await getProduct();

  const products = response?.data;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 gap-10">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default productPage;
