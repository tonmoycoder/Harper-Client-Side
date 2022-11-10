import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/MainContext';
import UseTitle from '../../../Hook/UseTitle';
import TableData from './TableData';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  UseTitle('Your Review');
  useEffect(() => {
    fetch(`http://localhost:5000/userComment/${user.email}`)
      .then((res) => res.json())
      .then((result) => setReview(result));
  }, [user.email]);

  return (
    <div>
      <div className="user-all-reviews lg:px-20 xl:px-40 py-20">
        <div className="overflow-x-auto relative border sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 font-general">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="paragraph py-3 px-6 font-bold text-base tracking-wide">
                  Service name
                </th>
                <th scope="col" className="paragraph py-3 px-6 font-bold text-base tracking-wide">
                  Review
                </th>
                <th scope="col" className="paragraph py-3 px-6 font-bold text-base tracking-wide">
                  Rating
                </th>
                <th scope="col" className="paragraph py-3 px-6 font-bold text-base tracking-wide">
                  Edit
                </th>
                <th scope="col" className="paragraph py-3 px-6 font-bold text-base tracking-wide">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {review.map((data) => (
                <TableData key={data._id} datas={data}></TableData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
