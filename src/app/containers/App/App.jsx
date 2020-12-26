import React from "react";
import { Quote } from "../Quote";

import { cn } from "../../helpers/classname";

import "./App.scss";

const appClassName = cn("app");

export const App = () => {
  return (
    <div className={appClassName("layout")}>
      <Quote />
    </div>
  );
};
