import React, { useState, useEffect } from 'react';

const Transactions = () => {
  const [merchantAmount, setMerchantAmount] = useState(null);
  const [users, setUsers] = useState([]);

  // Récupération du montant pour le marchand
  useEffect(() => {
    fetch('http://localhost:3000/account/admin/z0nDwGVZWGfJzk2p2GJkPrJ7Aqq2')
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setMerchantAmount(data[0].amounttran);
        }
      })
      .catch(error => {
        console.error('Failed to fetch account amount for merchant:', error);
      });
  }, []);

  // Récupération de tous les utilisateurs avec leurs montants de compte
  useEffect(() => {
    fetch('http://localhost:3000/account/user') // Endpoint pour récupérer tous les utilisateurs avec leurs montants de compte
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setUsers(data); // Met à jour l'état avec les données des utilisateurs
        } else {
          console.error('Invalid data format - expected array:', data);
        }
      })
      .catch(error => {
        console.error('Failed to fetch users:', error);
      });
  }, []);

  return (
    <div className="flex">
      {/* Côté marchand */}
      <div className="bg-white p-4 rounded-md shadow-md flex-1 mr-4">
        <h2 className="text-gray-800">Merchant Amount</h2>
        <p className="text-gray-800">
          Amount of merchant account: {merchantAmount !== null ? `${merchantAmount} DA` : 'Loading...'}
        </p>
      </div>

      {/* Côté utilisateur */}
      <div className="bg-white p-4 rounded-md shadow-md flex-1 ml-4">
        <h2 className="text-gray-800">User Amounts</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Account Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.idUser}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.idUser}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.username}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.amounttranuser !== undefined ? `${user.amounttranuser} DA` : 'Loading...'}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
