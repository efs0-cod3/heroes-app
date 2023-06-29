/* eslint-disable no-unused-vars */
import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,

} from "react-router-dom";
import { HeroScreen } from "../componets/ui/heroes/HeroScreen";
import { MarvelScreen } from "../componets/marvel/MarvelScreen";
import { DcScreen } from "../componets/dc/DcScreen";

import { HeroesApp } from "../HeroesApp";
import { LoginScreen } from "../componets/login/LoginScreen";
import { SearchScreen } from "../componets/search/SearchScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HeroesApp />}>
        <Route  path="/" element={<MarvelScreen />} />
        <Route  path="/marvel" element={<MarvelScreen />} />
        <Route  path="/dc" element={<DcScreen />} />
        <Route  path="/hero/:heroId" element={<HeroScreen />} />
        <Route  path="/search" element={<SearchScreen />} />
        <Route  path="/*" element={<MarvelScreen />} />
      </Route>
      <Route path="/login" element={<LoginScreen />} />
    </Route>
  )
);
export const AppRouter = () => {
  // [
  //   {
  //     path: "/",
  //     element: <HeroesApp />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <MarvelScreen />,
  //       },{
  //         path: "marvel",
  //         element: <MarvelScreen />,
  //       }, {
  //         path: "dc",
  //         element: ,
  //       },{
  //         path: "hero/:heroId",
  //         element: ,
  //       }
  //     ],
  //   },
  //   {
  //     // here it uses another template without Navbar!!!
  //     path: "/login",
  //     element: <LoginScreen />,
  //   }
  // ]

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
