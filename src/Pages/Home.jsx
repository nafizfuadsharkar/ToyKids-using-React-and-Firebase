import React, { useState, useEffect } from "react";
import Slider from "../Components/Slider";
import FeatureToys from "../Components/FeatureToys";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Loading from "./Loading";


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Slider />
      <FeatureToys />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
