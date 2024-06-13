import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

const Sidebar = () => {
  // State for sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory
  // Array for sidebar items
  const sidebarItems = [
    { 
      id: 1, 
      label: 'Overview', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L18.7071 9.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071C20.3166 13.0976 19.6834 13.0976 19.2929 12.7071L19 12.4142V19C19 20.1046 18.1046 21 17 21H14C13.4477 21 13 20.5523 13 20V17H11V20C11 20.5523 10.5523 21 10 21H7C5.89543 21 5 20.1046 5 19V12.4142L4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L5.29289 9.29289L11.2929 3.29289Z" fill="#383838"/>
</svg>


    ), 
    path: '/dashboard' 
  },
    { id: 2, 
      label: 'Users', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM6 13C3.79086 13 2 14.7909 2 17V18C2 19.1046 2.89543 20 4 20H12C13.1046 20 14 19.1046 14 18V17C14 14.7909 12.2091 13 10 13H6Z" fill="#383838"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2508 10.9055C13.7282 10.0447 14 9.05408 14 8C14 6.94592 13.7282 5.95532 13.2508 5.09447C13.9676 4.41606 14.9352 4 16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C14.9352 12 13.9676 11.5839 13.2508 10.9055ZM15.4649 20C15.8052 19.4117 16 18.7286 16 18V17C16 15.4633 15.4223 14.0615 14.4722 13H18C20.2091 13 22 14.7909 22 17V18C22 19.1046 21.1046 20 20 20H15.4649Z" fill="#383838"/>
        </svg>
      ), 
      path: '/dashboard/Users' 
    },
    { 
      id: 3, 
      label: 'Transactions', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" stroke-width="3.5" d="M2 7h18m-4-5l5 5l-5 5m6 5H4m4-5l-5 5l5 5" />
</svg>
      ), 
      path: '/dashboard/transactions' 
    },
    { 
      id: 4, 
      label: 'Database', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 7.20548C16.4183 7.20548 20 6.04019 20 4.60274C20 3.16529 16.4183 2 12 2C7.58172 2 4 3.16529 4 4.60274C4 6.04019 7.58172 7.20548 12 7.20548Z" fill="#383838"/>
          <path d="M12 22C16.963 22 20 20.3145 20 19.3973V14.9929C19.948 15.0247 19.888 15.0521 19.835 15.0827C19.677 15.1759 19.514 15.2647 19.342 15.3501C19.26 15.3907 19.176 15.4312 19.09 15.4696C18.897 15.5584 18.696 15.6427 18.49 15.7227C18.427 15.7469 18.366 15.7721 18.301 15.7962C16.2609 16.4847 14.1355 16.8215 12.001 16.7945C9.86648 16.8215 7.74112 16.4847 5.701 15.7962C5.636 15.7721 5.575 15.7469 5.512 15.7227C5.305 15.6427 5.104 15.5584 4.912 15.4696C4.826 15.4312 4.742 15.3907 4.66 15.3501C4.488 15.2647 4.325 15.1759 4.167 15.0827C4.114 15.0521 4.054 15.0247 4.002 14.9929V19.3973C4 20.3145 7.037 22 12 22Z" fill="#383838"/>
          <path d="M19.09 8.07233C18.897 8.1611 18.696 8.24548 18.49 8.32548C18.427 8.34959 18.366 8.37479 18.301 8.3989C16.2609 9.0874 14.1355 9.4242 12.001 9.39726C9.86648 9.4242 7.74112 9.0874 5.701 8.3989C5.636 8.37479 5.575 8.34959 5.512 8.32548C5.305 8.24548 5.104 8.1611 4.912 8.07233C4.826 8.03397 4.742 7.99342 4.66 7.95288C4.488 7.8674 4.325 7.77863 4.167 7.68548C4.112 7.65479 4.052 7.6274 4 7.59562V12C4 12.9173 7.037 14.6027 12 14.6027C16.963 14.6027 20 12.9173 20 12V7.59562C19.948 7.6274 19.888 7.65479 19.835 7.68548C19.677 7.77863 19.514 7.8674 19.342 7.95288C19.26 7.99342 19.176 8.03397 19.09 8.07233Z" fill="#383838"/>
        </svg>
    ), 
    path: '/dashboard/database' 
  },
  ];

  // Toggle function for sidebar visibility
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <div
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-56 h-screen transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto pt-20 pb-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id} className="text-gray-300">
                <Link
                  to={item.path} // Specify the path for the Link
                  className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Render the icon if it's available */}
                  {item.icon && <span className="mx-1">{item.icon}</span>}
                  <span className="mx-1">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
