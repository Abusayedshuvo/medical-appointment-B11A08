import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import DoctorDetails from "./component/DoctorDetails/DoctorDetails.jsx";
import Home from "./component/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        Component: Home,
        path: "/",
        loader: () => fetch("/doctors.json"),
      },
      {
        path: "/doctor/:id",
        element: <DoctorDetails></DoctorDetails>,
        loader: () => fetch("/doctors.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
