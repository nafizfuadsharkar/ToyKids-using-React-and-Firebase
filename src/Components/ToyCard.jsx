import React from "react";

const ToyCard = ({ product }) => {
  const { pictureURL, toyName, rating, availableQuantity, price } = product;

  return (
    <div className="w-full sm:w-[300px] md:w-[350px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <figure className="h-56 bg-gray-100">
        <img
          src={pictureURL}
          alt={toyName}
          className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
        />
      </figure>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          {toyName}
        </h2>

        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <p>
            <span className="font-medium text-gray-700">Rating:</span> ⭐ {rating}
          </p>
          <p>
            <span className="font-medium text-gray-700">Stock:</span> {availableQuantity}
          </p>
        </div>

        <p className="text-lg font-bold text-blue-600 mt-3">${price.toFixed(2)}</p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default ToyCard;
