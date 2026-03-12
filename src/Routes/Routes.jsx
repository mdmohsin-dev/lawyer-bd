import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import LawyersDetails from "../pages/Lawyers/LawyersDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "lawyerDetails/:id",
        Component: LawyersDetails
      }
    ]
  },
]);