import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import ContentWrapper from "./components/ContentWrapper";
import CategoriesList from "./components/CategoriesList";
import BrandsList from "./components/BrandsList";
import ProductsList from "./components/ProductsList.jsx";
import UsersList from "./components/UsersList.jsx";
import LastProduct from "./components/LastProduct.jsx";
import Search from "./components/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ContentWrapper />,
      },
      {
        path: "/last-product",
        element: <LastProduct />,
      },
      {
        path: "/products",
        element: <ProductsList />,
      },
      {
        path: "/users",
        element: <UsersList />,
      },
      {
        path: "/categories",
        element: <CategoriesList />,
      },
      {
        path: "/brands",
        element: <BrandsList />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
