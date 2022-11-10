import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  const { _id, name, image, price, description } = product;
  return (
    <div>
      <div className=" bg-white rounded-lg border w-full h-full sm:w-[18rem] sm:h-[34rem] lg:w-[18rem] lg:h-[33rem] xl:w-[20rem] xl:h-[33rem]">
        <Link href="#">
          <PhotoProvider>
            <PhotoView src={image}>
              <img className="rounded-t-lg w-full h-[40%]" src={image} alt="" />
            </PhotoView>
          </PhotoProvider>
        </Link>
        <div className="p-5">
          <Link href="#">
            <h5 className="heading mb-2 text-3xl font-bold tracking-wide text-gray-900 dark:text-white card-title">
              {name}
            </h5>
          </Link>
          <p className="paragraph text-base mb-3 font-normal text-gray-700 dark:text-gray-400 card-description">
            {description.length > 200 ? description.slice(0, 150) + '...' : description}
          </p>
          <h2 className="font-general font-[600] text-black text-6xl mb-4 mt-4">${price}</h2>
          <Link to={`/service/${_id}`} className="poppins btn btn-accent">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
