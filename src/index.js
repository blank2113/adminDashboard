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
import TourTypePage from "./pages/tourTypesPage/TourTypePage";
import TourTypes from "./components/tourTypes/TourTypes";
import TableTypes from "./components/tourTypes/typeTableComp/tableType/TableTypes";
import TypeTableComp from "./components/tourTypes/typeTableComp/TypeTableComp";
import AddTourTypeComp from "./components/tourTypes/addTourTypeComp/AddTourTypeComp";
import ReviewComponent from "./components/tourTypes/reviewComponent/ReviewComponent";
import Destinations from "./components/destinations/Destinations";
import DestinationsTable from "./components/destinations/destinationsTable/DestinationsTable";
import DestinationsTable2 from "./components/destinations/destinationsTable/DestinationsTable2";
import AddCityComp from "./components/destinations/addCityComp/AddCityComp";
import AddCountryComp from "./components/destinations/addCountryComp/AddCountryComp";
import Hotels from "./components/hotels/Hotels";
import HotelsTable from "./components/hotels/hotelsTable/HotelsTable";
import AddHotelsComp from "./components/hotels/addHotelsComp/AddHotelsComp";
import EditHotelsComp from "./components/hotels/editHotelsComp/EditHotelsComp";
import EditDestinationComp from "./components/destinations/editDestinationComp/EditDestinationComp";

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
      {
        path: "/main/tour_types",
        element: <TourTypes />,
        children: [
          { path: "/main/tour_types/all", element: <TypeTableComp /> },
          { path: "/main/tour_types/add", element: <AddTourTypeComp /> },
          { path: "/main/tour_types/edit/:id", element: <ReviewComponent /> },
        ],
      },
      {
        path: "/main/destinations",
        element: <Destinations />,
        children: [
          { path: "/main/destinations/all", element: <DestinationsTable /> },
          { path: "/main/destinations/addCity", element: <AddCityComp /> },
          { path: "/main/destinations/addCountry", element: <AddCountryComp /> },
          { path: "/main/destinations/allCities", element: <DestinationsTable2 /> },
          { path: "/main/destinations/edit/:id", element: <EditDestinationComp /> },
        ],
      },
      {
        path: "/main/hotels",
        element: <Hotels />,
        children: [
          { path: "/main/hotels/all", element: <HotelsTable /> },
          { path: "/main/hotels/add", element: <AddHotelsComp /> },
          { path: "/main/hotels/edit/:id", element: <EditHotelsComp /> },
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
