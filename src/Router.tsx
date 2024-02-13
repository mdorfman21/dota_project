import React from "react";
import App from "./App";
import SteamIdInput from "./components/player/SteamIdInput.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "player",
    element: <SteamIdInput />,
    children: [
      {
        path: "player/:steamId",
        element: <h2>steam</h2>,
      },
    ],
  },
]);

export default router;
