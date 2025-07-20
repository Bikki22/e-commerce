"use client";

import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className=" w-10 h-10 flex justify-center items-center">
      <button
        className="text-xl  cursor-pointer px-4 py-1"
        onClick={() => router.back()}
      >
        <MdArrowBackIosNew />
      </button>
    </div>
  );
};

export default BackButton;
