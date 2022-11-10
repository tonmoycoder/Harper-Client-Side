import React from 'react';
import { Link } from 'react-router-dom';

const TableData = ({datas}) => {
   const {serviceName,retting,comment} = datas
    return (
      
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {serviceName}
                </th>
                <td class="py-4 px-6">{comment.length>20? comment.slice(0,20)+'...': comment}</td>
                <td class="py-4 px-6 font-[600] text-orange-500">{retting}</td>
                <td class="py-4 px-6 text-blue-600  font-[600]">
                  <Link to='/edit'>Edit</Link>
                </td>
                <td class="py-4 px-6 text-red-600 font-[600]">
                  <Link>Delete</Link>
                </td>
              </tr>
        
    );
};

export default TableData;