import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./global.css";
import "./index.css";

const SignUpPage = lazy(() => import("./container/SignUpPage"));
const SignInPage = lazy(() => import("./container/SignInPage"));
const Dashboard = lazy(() => import("./container/Dashboard"));
const Tables = lazy(() => import("./container/Tables"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<>loading...</>}>
        <SignUpPage />,
      </Suspense>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <Suspense fallback={<>loading...</>}>
        <SignInPage />,
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<>loading...</>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/tables",
    element: (
      <Suspense fallback={<>loading...</>}>
        <Tables />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
