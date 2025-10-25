import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import ToyIndividual from "../Pages/ToyIndividual";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/category/:id",
                element: <ToyIndividual></ToyIndividual>,
                loader:()=>fetch("/toys.json")
            }
        ]
    },
    {
        path: '/Toys',
        element: <h2>This is Toys</h2>
    },
    {
        path: '/profile',
        element: <h2>This is profile</h2>
    },
    {
        path: '/contact',
        element: <h2>This is Contact</h2>
    },
    {
        path: '/category/:id',
        element: <ToyIndividual></ToyIndividual>
    },
    {
        path: '/*',
        element: <h2>This is Error</h2>
    },
])

export default router; 