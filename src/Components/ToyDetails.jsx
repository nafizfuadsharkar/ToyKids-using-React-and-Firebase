import React from "react";

const ToyDetails = ({ toy }) => {
  if (!toy) return <p className="text-center text-gray-500 mt-10">No toy data found.</p>;

  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = toy;

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden my-10 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative w-full h-80 sm:h-96 overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-full object-contain bg-gray-50 dark:bg-gray-800 p-6"
        />
        <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {subCategory}
        </span>
        <span className="absolute top-4 right-4 bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded-full shadow">
          ⭐ {rating}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-5">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
          {toyName}
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          {description}
        </p>

        {/* Price & Quantity */}
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 p-4 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400">Price</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">${price}</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 p-4 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400">Available Quantity</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{availableQuantity}</p>
          </div>
        </div>

        {/* Seller Info */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mt-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Seller Information</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Name:</span> {sellerName}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Email:</span>{" "}
            <a href={`mailto:${sellerEmail}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
              {sellerEmail}
            </a>
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-end mt-6">
          <button className="px-6 py-3 bg-primary hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
