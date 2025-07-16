import React from "react";

const notFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black w-full h-screen">
      <h1 className="text-red-500 text-4xl font-bold">404</h1>
      <h1 className="text-4xl text-white">Not Found</h1>
    </div>
  );
};

export default notFoundPage;
