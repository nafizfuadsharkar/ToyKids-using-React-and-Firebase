import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto sticky top-0">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
