import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [merchantName, setMerchantName] = useState('admin'); // Remplacez par le nom réel du marchand
  const [amount, setAmount] = useState(null); // État pour stocker le montant récupéré de l'API

 

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {/* <h1 className="text-2xl font-bold mb-4">Dashboard</h1> */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="text-gray-800">
            Welcome, {merchantName}!
          </p>
         
        </div>
        <div className="mt-4">
          <Outlet /> {/* Affichage du contenu spécifique au dashboard */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
