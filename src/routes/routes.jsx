import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/AboutUs";
import PlacesOfInterest from "../pages/PlacesOfInterest/PlacesOfInterest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/places",
        element: <PlacesOfInterest></PlacesOfInterest>,
      },

    ],
  },

]);