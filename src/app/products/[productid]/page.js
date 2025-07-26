import { getProductById } from "@/api/product";
import BackButton from "@/components/BackButton";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const productId = (await params).productid;

  const response = await getProductById(productId);

  return {
    title: response.name,
    keyword: `${response.brand},${response.category}`,
  };
};

const productPageById = async ({ params }) => {
  const productId = (await params).productid;

  const product = await getProductById(productId);

  return (
    <div>
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-1/2">
          <Image
            src={product?.imageUrls[0]}
            width={800}
            height={500}
            className="w-full h-[400px] object-contain "
            alt="product image"
          />

          <div className="flex px-5 my-5 gap-10 justify-start">
            {product?.imageUrls?.map((url, index) => (
              <Image
                src={url}
                key={index}
                width={80}
                height={80}
                alt="small product detail"
                className="object-cover border-1 border-gray-400 rounded-sm"
              />
            ))}
          </div>
        </div>

        <div className="w-1/2 h-full px-5 py-5">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
            {product.brand}
          </span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
            {product.category}
          </span>
          <h1 className="text-2xl font-medium mt-2 text-gray-900 dark:text-white ">
            {product.name}
          </h1>
          <p className="text-xl font-semibold my-3">Rs {product.price}</p>
          <div className="w-full my-2 flex justify-start items-center gap-5">
            <button className="border-2 px-5 py-1 cursor-pointer bg-black text-white rounded-md">
              <span className="text-lg">Add to cart</span>
            </button>
            <button className="border-2 px-5 py-2 cursor-pointer rounded-md">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productPageById;
