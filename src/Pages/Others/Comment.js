import React from "react";

const Comment = ({commentData}) => {
    const {image,email,retting,comment,time} = commentData
  return (
    <div>
      <div className="all-reviews mb-20 mt-10">
        <div className="main-review border-b border-gray-300">
          {/* user details */}
          <div className="user-details mb-4">
            <div className="main-details flex items-start gap-2">
              <img
                class="w-10 h-10 rounded-full"
                src={image}
                alt="Rounded avatar"
              />
              <div className="more-details font-general font-[500]">
                <h1>{email}</h1>
                <p>{time}</p>
              </div>
            </div>
            <div className="main-review sm:pl-12 font-general font-[500] mt-2">
              <h1 className="font-general text-3xl font-[600] py-2 text-orange-500">
                {retting} <span className="text-gray-300 text-2xl">out of 5</span>{" "}
              </h1>
              <p>
                {comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
