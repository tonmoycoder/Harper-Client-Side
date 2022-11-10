import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LimitCard from './LimitCard/LimitCard';

const Cards = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://assignment-11-server-green.vercel.app/products/limit')
      .then((res) => res.json())
      .then((result) => setProduct(result));
  }, []);
  return (
    <div className="max-w-6xl mx-auto ">
      <h1 className="heading font-general font-[600] text-4xl text-center mt-24">Our services.</h1>
      <div className="divider"></div>
      <div className="flex flex-col gap-5 px-6 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-14 lg:grid-cols-3 mt-10 mb-10 lg:px-0 xl:px-24 ml-5 md:ml-0 lg:ml-0">
        {product.map((result) => (
          <LimitCard key={result._id} productDetails={result}></LimitCard>
        ))}
      </div>
      <div className="details-button flex justify-center mb-10">
        <Link
          to="/services"
          type="button"
          className="text-white poppins bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
          View all services
        </Link>
      </div>
    </div>
  );
};

export default Cards;
