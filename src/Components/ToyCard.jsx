import React from "react";
import { Link } from "react-router";

const ToyCard = ({ product }) => {
  const { toyId, pictureURL, toyName, rating, availableQuantity, price } = product;

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gray-50 dark:bg-gray-800">
        <img
          src={pictureURL}
          alt={toyName}
          className="object-contain w-full h-full p-6 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Rating Badge */}
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
          ⭐ {rating}
        </span>

        {/* Price Tag */}
        <span className="absolute bottom-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          ${price.toFixed(2)}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-2">
        {/* Name */}
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 line-clamp-1">
          {toyName}
        </h2>

        {/* Stock Info */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">Stock:</span>{" "}
          {availableQuantity > 0 ? (
            <span className="text-green-600 dark:text-green-400 font-semibold">
              {availableQuantity} Available
            </span>
          ) : (
            <span className="text-red-500 font-semibold">Out of Stock</span>
          )}
        </p>

        {/* View More Button */}
        <Link to={`/toy-details/${toyId}`}>
          <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-semibold transition-colors duration-300 shadow-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
