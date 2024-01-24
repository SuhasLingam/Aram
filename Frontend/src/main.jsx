import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Home, Upload, Deeds } from "./pages";

// const walletAddress = "02xcz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "/deeds",
        element: <Deeds />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId="7d6e7b097d8076fea0fbc7dff79a4880"
      activeChain="goerli"
    >
      <RouterProvider router={router} />
    </ThirdwebProvider>
  </React.StrictMode>
);
