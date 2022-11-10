import React, { useContext } from "react";
import toast from "react-hot-toast";
import moment from "moment";
import { AuthContext } from "../../Contexts/MainContext";
import UseTitle from "../../Hook/UseTitle";

const AddService = () => {
  const { user } = useContext(AuthContext);
  UseTitle("Add a new service");
  const fromSubmit = (e) => {
    const getUserTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const image = from.image.value;
    const price = from.price.value;
    const description = from.description.value;
    // console.log(name,image,price,description)

    const productDetails = {
      userName: `${user.displayName}`,
      email: `${user.email}`,
      name: `${name}`,
      image: `${image}`,
      price: `${price}`,
      description: `${description}`,
      time: `${getUserTime}`,
    };
    // console.log(productDetails);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          e.target.reset();
          toast.success("Your service was added successfully");
        }
      });
  };
  return (
    <div className="px-8 sm:px-40 pb-20 pt-10">
      <h1 className="font-general text-center text-3xl font-[600] py-10">
        Add your service.
      </h1>
      <form onSubmit={fromSubmit}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Service name
            </label>
            <input
              name="name"
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="service name"
              required=""
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image (URL)
            </label>
            <input
              name="image"
              type="url"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="google.com"
              required=""
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              name="price"
              type="number"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="290"
              required=""
            />
          </div>
        </div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Description
        </label>
        <textarea
          name="description"
          id="message"
          rows="4"
          class=" mb-8 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          placeholder="product description"
        ></textarea>

        <button
          type="submit"
          class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
