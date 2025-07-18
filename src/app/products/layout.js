import React from "react";

const ProductsLayout = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-medium">Products page</h1>
      {children}
    </div>
  );
};

export default ProductsLayout;
