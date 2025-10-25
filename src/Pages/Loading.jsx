import React from "react";
import loaderImg from "../assets/spinImg.png"; 
const ImageLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src={loaderImg} alt="Loading..." className="w-32 h-32 animate-spin" />
    </div>
  );
};

export default ImageLoader;
