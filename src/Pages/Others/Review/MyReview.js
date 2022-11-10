import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/MainContext";
import UseTitle from "../../../Hook/UseTitle";
import TableData from "./TableData";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const[review,setReview] = useState([])
  UseTitle('Your Review')
  useEffect(()=>{
    fetch(`http://localhost:5000/userComment/${user.email}`)
    .then(res=>res.json())
    .then(result=>setReview(result))
  },[])
  console.log(review)
  return (
    <div>
      <div className="user-all-reviews lg:px-20 xl:px-40 py-20">
        <div class="overflow-x-auto relative border sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 font-general">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Service name
                </th>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Main review
                </th>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Retting
                </th>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Edit
                </th>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
             {review.map(data=><TableData key={data._id} datas={data}></TableData>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
