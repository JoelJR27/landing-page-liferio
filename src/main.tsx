import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import NavigationError from "./components/NavigationError.tsx";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyContact = React.lazy(() => import("./pages/Contact"));
const LazyOurServices = React.lazy(() => import("./pages/OurServices"));
const LazyAboutUs = React.lazy(() => import("./pages/AboutUs"));
const LazyWorkWithUs = React.lazy(() => import("./pages/WorkWithUs.tsx"));
const LazyLifeKids = React.lazy(() => import("./pages/LifeKids.tsx"));

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
      {
        path: "trabalhe-conosco",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyWorkWithUs />
          </Suspense>
        ),
      },
      {
        path: "life-kids",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyLifeKids />
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
