"use client";

import * as React from "react";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const { theme } = useSelector((state) => state.userPrefrence);

  return <div className={theme}>{children}</div>;
};

export default MainLayout;
