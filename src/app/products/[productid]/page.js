import React from "react";

const productPageById = async ({ params }) => {
  const productId = (await params).productId;

  return <div>product by id : {productId}</div>;
};

export default productPageById;
