import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/AboutUs";
import PlacesOfInterest from "../pages/PlacesOfInterest/PlacesOfInterest";
import VisaInfo from "../pages/VIsa/VisaInfo";
import Bangladesh from "../pages/Bangladesh/Bangladesh";
import OurPeople from "../pages/OurPeople/OurPeople";

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
      {
        path: "/visa-info",
        element: <VisaInfo></VisaInfo>,
      },
      {
        path: "/bangladesh",
        element: <Bangladesh></Bangladesh>,
      },
      {
        path: "/our-people",
        element: <OurPeople></OurPeople>,
      },

    ],
  },

]);