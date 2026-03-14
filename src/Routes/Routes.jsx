import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import LawyersDetails from "../pages/Lawyers/LawyersDetails";
import MyBookings from "../pages/Bookings/MyBookings";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children: [
      { index: true, Component: Home },
      {
        path: "lawyerDetails/:id",
        Component: LawyersDetails
      },
      {
        path:"myBookings",
        Component:MyBookings
      }
    ]
  },
]);