"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GlobalError = ({ error }) => {
  const router = useRouter();
  return (
    <div>
      <h1>Something went wrong</h1>
      <button
        onClick={() => router.push("/")}
        className="border-1 bg-black text-red-500 cursor-pointer"
      >
        Back to home
      </button>
    </div>
  );
};

export default GlobalError;
