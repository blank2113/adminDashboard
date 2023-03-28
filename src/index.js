import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import LoginPage from "./pages/loginPage/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/errorPage/ErrorPage";
import MainPage from "./pages/mainPage/MainPage";
import Tour from "./components/tour/Tour";
import TableComp from "./components/tour/tableWrapper/TableComp";
import AddTourComp from "./components/tour/addTourComp/AddTourComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/main/tour",
        element: <Tour />,
        children: [
          { path: "/main/tour/all", element: <TableComp /> },
          { path: "/main/tour/files", element: <TableComp /> },
          { path: "/main/tour/add", element: <AddTourComp /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
