import moment from 'moment';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/MainContext';
import UseTitle from '../../Hook/UseTitle';

const AddService = () => {
  const { user } = useContext(AuthContext);
  UseTitle('Add a new service');
  const fromSubmit = (e) => {
    const getUserTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const image = from.image.value;
    const price = from.price.value;
    const description = from.description.value;

    const productDetails = {
      userName: `${user.displayName}`,
      email: `${user.email}`,
      name: `${name}`,
      image: `${image}`,
      price: `${price}`,
      description: `${description}`,
      time: `${getUserTime}`,
    };

    fetch('https://assignment-11-server-green.vercel.app/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          e.target.reset();
          toast.success('Your service was added successfully');
        }
      });
  };
  return (
    <div className="px-8 sm:px-40 pb-20 pt-10">
      <h1 className="heading text-center text-5xl font-extrabold leading-4 tracking-wider py-10">
        Add your service
      </h1>
      <form onSubmit={fromSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 paragraph">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-xl font-bold tracking-wide text-gray-900 dark:text-gray-300">
              Service Name
            </label>
            <input
              name="name"
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base poppins rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="service name"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-xl font-bold tracking-wide text-gray-900 dark:text-gray-300">
              Image
            </label>
            <input
              name="image"
              type="url"
              id="last_name"
              className="text-base poppins bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="Input your profile image url"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-xl font-bold tracking-wide text-gray-900 dark:text-gray-300">
              Price
            </label>
            <input
              name="price"
              type="number"
              id="company"
              className="text-base poppins bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="$00"
              required=""
            />
          </div>
        </div>
        <label
          htmlFor="last_name"
          className="block mb-2 text-xl font-bold tracking-wide text-gray-900 dark:text-gray-300">
          Description
        </label>
        <textarea
          name="description"
          id="message"
          rows="4"
          className="text-base poppins mb-8 block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          placeholder="service description"></textarea>

        <button type="submit" className="poppins btn btn-accent">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
