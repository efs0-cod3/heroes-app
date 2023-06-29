/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./componets/ui/Navbar";

export const HeroesApp = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </div>
  );
};
