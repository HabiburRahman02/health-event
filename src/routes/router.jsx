import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import Donation from "../pages/Donation/Donation";
import DonateDetails from "../pages/DonateDetails/DonateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/doctor/:id",
        element: <DoctorDetails></DoctorDetails>,
        loader: () => fetch("/doctors.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/donation/:id",
        element: <DonateDetails></DonateDetails>,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
