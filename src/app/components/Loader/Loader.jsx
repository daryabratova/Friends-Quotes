import React from "react";

import { cn } from "../../helpers/classname";

import "./Loader.scss";

const loaderClassName = cn("loader");

export const Loader = () => {
  return (
    <div className={loaderClassName("layout")}>
      <div className={loaderClassName("body")}></div>
    </div>
  );
};
