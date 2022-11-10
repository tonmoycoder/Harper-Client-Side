import React from 'react';
import UseTitle from '../../../Hook/UseTitle';

const EditComment = () => {
  UseTitle('Edit your comment');
  return (
    <div className="main-comment-area px-6 lg:px-20 xl:px-40 my-20">
      <div className="upper-part-comment-section block sm:flex gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Rounded avatar"
        />
        <form className="w-full">
          <div>
            <label
              htmlFor="first_name"
              className="mt-6 sm:mt-0 block mb-2 text-lg font-bold poppins text-gray-900 dark:text-gray-300">
              Rating
            </label>
            <input
              type="number"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 mb-4 w-full sm:w-[20rem]"
              placeholder="1 out of 5"
              required
            />
          </div>
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your Review
              </label>
              <textarea
                id="comment"
                rows="4"
                className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a Review..."
                required=""></textarea>
            </div>
            <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
              <button type="submit" className="poppins btn btn-accent">
                Post review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditComment;
