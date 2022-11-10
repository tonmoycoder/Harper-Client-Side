import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import moment from "moment/moment";
import Comment from "../Others/Comment";
import { AuthContext } from "../../Contexts/MainContext";
import UseTitle from "../../Hook/UseTitle";

const Service = () => {
  UseTitle("Service");
  window.scroll(0, 0);
  const { user } = useContext(AuthContext);
  const { image, name, description, price, _id } = useLoaderData();

  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/comment/${_id}`)
      .then((res) => res.json())
      .then((result) => setComment(result));
  }, []);

  console.log(comment);

  const rettingSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const getUserTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    const retting = from.retting.value;
    const comment = from.comment.value;

    const userComment = {
      userName: `${user.displayName}`,
      email: `${user.email}`,
      image: `${user.photoURL}`,
      productID: `${_id}`,
      retting: `${retting}`,
      comment: `${comment}`,
      time: `${getUserTime}`,
      serviceName: `${name}`,
    };

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          e.target.reset();
          toast.success("Thank you for your feed back");
        }
      });
  };

  console.log(comment);

  return (
    <div>
      <div className="course-main-part px-4 mt-20 mb-20 block lg:px-20 xl:px-40 lg:flex justify-center items-start lg:gap-10 ">
        <div className="course-left w-full lg:w-[50%]">
          <img
            className="rounded-md mb-10 w-[100%] lg:w-[100%] lg:mb-0 "
            src={image}
            alt=""
            srcset=""
          />
        </div>

        {/* course name */}
        <div className="course-right w-[100%] lg:w-[50%]">
          <h1 className="text-3xl font-general font-[600] mb-4">{name}</h1>
          <p className="font-general font-medium mb-8">{description}</p>
          <h1 className="font-general text-6xl font-[600] text-orange-500">
            ${price}
          </h1>
        </div>
      </div>

      {/* comment section start here */}
      <div className="main-comment-area px-6 lg:px-20 xl:px-40">
        {user ? (
          <div className="upper-part-comment-section block sm:flex gap-4">
            <img
              class="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt="Rounded avatar"
            />
            <form className="w-full" onSubmit={rettingSubmit}>
              <div>
                <label
                  for="first_name"
                  class="mt-6 sm:mt-0 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Retting
                </label>
                <input
                  type="number"
                  id="first_name"
                  name="retting"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 mb-4 w-full sm:w-[20rem]"
                  placeholder="1 to 5"
                  required
                />
              </div>
              <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    name="comment"
                    id="comment"
                    rows="4"
                    className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required=""
                  ></textarea>
                </div>
                <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-orange-500 rounded-lg focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-900 hover:bg-orange-800"
                  >
                    Post review
                  </button>
                  <div className="flex pl-0 space-x-1 sm:pl-2">
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Set location</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Upload image</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div
            id="alert-additional-content-2"
            class="p-4 mb-4 border border-red-300 rounded-lg bg-red-50 dark:bg-red-200"
            role="alert"
          >
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-5 h-5 mr-2 text-red-900 dark:text-red-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Info</span>
              <h3 class="text-lg font-medium text-red-900 dark:text-red-800">
                Please login.
              </h3>
            </div>
            <div class="mt-2 mb-4 text-sm text-red-900 dark:text-red-800">
              Please login to add your review. If you don't have an account
              please register.
            </div>
            <div class="flex">
              <Link
                to="/login"
                type="button"
                class="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900"
              >
                Login
              </Link>
              <Link
                to="/register"
                type="button"
                class="text-red-900 bg-transparent border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white"
                data-dismiss-target="#alert-additional-content-2"
                aria-label="Close"
              >
                Register
              </Link>
            </div>
          </div>
        )}

        {comment.length === 0 ? (
          <h1 className="font-general font-[500] text-center py-6">
            No review yet. Please leave a review.
          </h1>
        ) : undefined}

        {/* all reviews sections here */}
        {comment.map((data) => (
          <Comment key={data._id} commentData={data}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Service;
