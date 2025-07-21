import Image from "next/image";
import React from "react";
import loginImage from "@/assets/images/login.jpg";

const Authlayout = ({ children }) => {
  return (
    <section className=" h-[91vh]  flex justify-center bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-10">
      <div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 md:w-3xl max-h-[80vh] shadow-md my-15 md:rounded-md">
        <div className="bg-white border-r-1 border-gray-200 px-5 py-3 rounded-l-md">
          {children}
        </div>
        <Image
          src={loginImage}
          alt="login image"
          width={500}
          height={800}
          className="w-full h-full hidden md:block rounded-r-md"
        />
      </div>
    </section>
  );
};

export default Authlayout;
