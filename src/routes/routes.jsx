import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/AboutUs";
import PlacesOfInterest from "../pages/PlacesOfInterest/PlacesOfInterest";
import VisaInfo from "../pages/VIsa/VisaInfo";
import Bangladesh from "../pages/Bangladesh/Bangladesh";
import OurPeople from "../pages/OurPeople/OurPeople";
import OurTours from "../pages/OurTours/OurTours";
import RatesReservation from "../pages/Booking/RatesReservation/RatesReservation";
import TourConditions from "../pages/Booking/TourCondition/TourConditions";
import OnlineApplicationForm from "../pages/Booking/OnlineApplication/OnlineApplicationForm";
import PhotoGallery from "../pages/TravelStory/PhotoGallery/PhotoGallery";
import TravelBlogVideo from "../pages/TravelStory/TravelBlog/TravelBlogVideo";
import GuestExperiences from "../pages/TravelStory/GuestExprience/GuestExperiences";
import ContactPage from "../pages/Contact/Contact";
import Contact from "../pages/Contact/Contact";

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
      {
        path: "/tours",
        element: <OurTours></OurTours>,
      },
      {
        path: "/rates",
        element: <RatesReservation></RatesReservation>,
      },
      {
        path: "/conditions",
        element: <TourConditions></TourConditions>,
      },
      {
        path: "/order",
        element: <OnlineApplicationForm></OnlineApplicationForm>,
      },
      {
        path: "/gallery",
        element: <PhotoGallery></PhotoGallery>,
      },
      {
        path: "/blog",
        element: <TravelBlogVideo></TravelBlogVideo>
      },
      {
        path: "/experiences",
        element: <GuestExperiences></GuestExperiences>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },

    ],
  },

]);