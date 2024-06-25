import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import { Outlet } from 'react-router-dom';
import Overview from './overview';

const Dashboard = () => {
  const [merchantName, setMerchantName] = useState('admin'); // Remplacez par le nom réel du marchand
  const [amount, setAmount] = useState(null); // État pour stocker le montant récupéré de l'API



  return (
    <div className="flex">
      <Overview />
    </div>
  );
};

export default Dashboard;
