import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import ToyIndividual from "../Pages/ToyIndividual";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        element: <ToyIndividual></ToyIndividual>,
        loader: () => fetch("/toys.json"),
      },
    ],
  },
  {
    path: "/Toys",
    element: <h2>This is Toys</h2>,
  },
  {
    path: "/profile",
    element: <h2>This is profile</h2>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/Register",
        Component: Register,
      },
    ],
  },
  {
    path: "/toy-details/:id",
    element: (
      <PrivateRoute>
        <ToyIndividual></ToyIndividual>
      </PrivateRoute>
    ),
    loader: () => fetch("/toys.json"),
  },
  {
    path: "/*",
    element: <h2>This is Error</h2>,
  },
]);

export default router;
