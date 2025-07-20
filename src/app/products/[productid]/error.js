"use client";

import React from "react";

const productByIdError = ({ error }) => {
  return <div>{error.message}</div>;
};

export default productByIdError;
