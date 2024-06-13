import React from 'react';

const Table = ({ headers, productss }) => {
  // Debug: Log the type of headers
  console.log('Headers type:', typeof headers);
  console.log('Headers value:', headers);
  const products = [
    {
      name: "Apple MacBook Pro 17\"",
      color: "Silver",
      category: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99"
    }
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {(Array.isArray(headers) ? headers : []).map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.map((product, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {product.name}
              </th>
              <td className="px-6 py-4">{product.color}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-fuchsia-500 dark:text-fuchsia-400 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
