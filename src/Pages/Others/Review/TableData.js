import React from 'react';
import { Link } from 'react-router-dom';

const TableData = ({ datas }) => {
  const { _id, serviceName, retting, comment } = datas;
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you want to delete your review');
    if (proceed) {
      fetch(`https://assignment-11-server-green.vercel.app/userComment/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <>
      {_id ? (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {serviceName}
          </th>
          <td className="py-4 px-6">
            {comment.length > 20 ? comment.slice(0, 20) + '...' : comment}
          </td>
          <td className="py-4 px-6 font-[600] text-orange-500">{retting}</td>
          <td className="py-4 px-6 text-blue-600  font-[600]">
            <button className="btn btn-accent poppins">
              <Link to="/edit">Edit</Link>
            </button>
          </td>
          <td className="py-4 px-6 text-red-600 font-[600]">
            <button className="btn btn-accent poppins">
              <Link onClick={() => handleDelete(_id)}>Delete</Link>
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>please add review</td>
        </tr>
      )}
    </>
  );
};

export default TableData;
