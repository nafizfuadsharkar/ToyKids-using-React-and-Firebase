import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ToyDetails from "../Components/ToyDetails";
import { useLoaderData, useParams } from "react-router";
import Footer from "../Components/Footer";
import DetailsForm from "../Components/DetailsForm";

const ToyIndividual = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [toy, setToy] = useState({});
  useEffect(() => {
    const toyDetails = data.find((singleToy) => singleToy.toyId == id);
    setToy(toyDetails);
  }, [data, id]);
  return (
    <div>
      <header className="w-11/12 mx-auto py-4 ">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <ToyDetails toy={toy}></ToyDetails>
        <DetailsForm></DetailsForm>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ToyIndividual;
