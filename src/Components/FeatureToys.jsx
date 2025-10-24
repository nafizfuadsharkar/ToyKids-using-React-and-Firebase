import React from "react";
import useProducts from "../Hooks/useToys";
import ToyCard from "./ToyCard";

const FeatureToys = () => {
  const { products, loading, eror } = useProducts();
  const featuredProduct = products.slice(0, 9);
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-5xl font-bold text-center py-5 ">
        <span className="text-accent">Popular</span>{" "}
        <span className="text-primary">Toys</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {featuredProduct.map((product) => (
          <ToyCard key={product.toyId} product={product}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureToys;
