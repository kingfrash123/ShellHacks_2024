// import { StrictMode } from "react";
// import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import Header from "/src/components/loginUI/Header.jsx";
import Footer from "/src/components/loginUI/Footer.jsx";
import Dashboard from "/src/pages/Dashboard.jsx";

import { Outlet, RouterProvider } from "react-router-dom";
import "../src/sass/style.css";

const Layout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/src/pages/Dashboard.jsx",
        element: <Dashboard />,
      },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
      // {
      //   path: "/",
      //   element: <App />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
