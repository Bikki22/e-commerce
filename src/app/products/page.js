import { getProduct } from "@/api/product";
import ProductCard from "@/components/products/Card";
import React from "react";

const productPage = async () => {
  const response = await getProduct();

  const products = response?.data;
  console.log(products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-8">
      {products?.map((product, index) => (
        // <ProductCard key={index} product={product} />
        <h1 key={index}>{product.name}</h1>
      ))}
    </div>
  );
};

export default productPage;
