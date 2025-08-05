import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyContact = React.lazy(() => import("./pages/Contact"));
const LazyOurServices = React.lazy(() => import("./pages/OurServices"));
const LazyAboutUs = React.lazy(() => import("./pages/AboutUs"));
import App from "./App.tsx";
import NavigationError from "./components/NavigationError.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NavigationError />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: "contatos",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyContact />
          </Suspense>
        ),
      },
      {
        path: "servicos",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyOurServices />
          </Suspense>
        ),
      },
      {
        path: "sobre",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyAboutUs />
          </Suspense>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
