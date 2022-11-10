import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hook/UseTitle';
import Card from '../Others/Card';

const Services = () => {
  const data = useLoaderData();
  UseTitle('All our services');
  return (
    <div>
      <h1 className="font-general text-4xl text-center font-[600] mt-24">Our All services.</h1>
      <div className="grid grid-cols-1 gap-6 mt-10 mb-10 px-6 sm:grid-cols-2 lg:px-14 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 xl:px-16 2xl:px-24">
        {data.map((data) => (
          <Card key={data._id} product={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
