import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref } from "firebase/database";

const Overview = () => {
    const [data, setData] = useState({})
    const db = getDatabase();
    const starCountRef = ref(db, '/money');
    useEffect(() => {
        const unsubscribe = onValue(starCountRef, (snapshot) => {
            setData(snapshot.val());
            console.log("🚀 ~ onValue ~ snapshot.val():", snapshot.val());
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className='flex flex-row justify-evenly w-full '>
                <div className="bg-white p-6 rounded-lg shadow-md w-1/3 h-48">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-sm font-medium text-gray-700">User Balance</h3>
                            <span className="text-4xl font-bold text-black">{data.userAmount} DA</span>
                            {/* <h3 className="text-sm font-medium text-gray-700">New products this week</h3>  */}
                        </div>
                        <div className="flex items-center text-green-500">
                            <span className="text-xl font-semibold">+ {data.amount}</span>
                            <svg className="h-5 w-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-sm font-medium text-gray-700">Merchant Balance</h3>
                            <span className="text-4xl font-bold text-black">{data.marchandAmount} DA</span>
                            {/* <h3 className="text-sm font-medium text-gray-700">New products this week</h3>  */}
                        </div>
                        <div className="flex items-center text-red-500">
                            <span className="text-xl font-semibold">- {data.amount}</span>
                            <svg className="h-5 w-5 ml-1 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview