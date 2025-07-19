import Image from "next/image";
import React from "react";
import cloting from "@/assets/images/clothing.jpg";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-full dark:shadow px-5 py-3 shadow-xl rounded-md grid grid-rows-[auto_1fr_auto] border-2 border-gray-300">
      <Link href={`/products/${product.id}`}>
        <div className="w-full flex justify-center">
          <Image
            src={product.imageUrls[0] ?? cloting}
            width={500}
            height={500}
            alt="product image"
            className="w-full max-h-40 py-3 border-1 border-gray-500 rounded-md object-cover"
          />
        </div>
      </Link>

      <div className="px-5">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
          {product.brand}
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
          {product.category}
        </span>
        <Link href={`/products/${product.id}`}>
          <h1 className="text-lg font-medium px-2 py-1">{product.name}</h1>
        </Link>

        <p className="text-md font-semibold px-2.5 py-3">Rs. {product.price}</p>
      </div>
      <div>
        <button className="w-full flex justify-center border-1 py-1 my-2 rounded-sm text-lg bg-gray-800 text-white hover:bg-gray-700 ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
