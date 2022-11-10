import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { _id, name, image, price, description } = product;
  return (
    <div>
      <div class=" bg-white rounded-lg border w-full h-full sm:w-[18rem] sm:h-[34rem] lg:w-[18rem] lg:h-[33rem] xl:w-[20rem] xl:h-[33rem]">
        <Link href="#">
          <PhotoProvider>
            <PhotoView src={image}>
              <img class="rounded-t-lg w-full h-[40%]" src={image} alt="" />
            </PhotoView>
          </PhotoProvider>
        </Link>
        <div class="p-5">
          <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white card-title">
              {name}
            </h5>
          </Link>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 card-description">
            {description.length > 200
              ? description.slice(0, 150) + "..."
              : description}
          </p>
          {/* pricing */}
          <h2 className="font-general font-[600] text-black text-6xl mb-4 mt-4">
            ${price}
          </h2>
          <Link
            to={`/service/${_id}`}
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
