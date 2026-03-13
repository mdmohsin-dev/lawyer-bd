import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import LawyersDetails from "../pages/Lawyers/LawyersDetails";
import MyBookings from "../pages/Bookings/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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