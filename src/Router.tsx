import React from "react";
import App from "./App";
import SteamIdInput from "./components/player/SteamIdInput.tsx";
import ProfileInfo from "./components/player/ProfileInfo.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SteamIdInput />,
    children: [
      {
        path: "player/:steamId",
        element: <ProfileInfo />,
      },
    ],
  },
]);

export default router;
