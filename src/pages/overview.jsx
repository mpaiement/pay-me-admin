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
        <div>
            <div>
                user amount : {data.userAmount}
            </div>
            <div>
                marchand amount : {data.marchandAmount}
            </div>
        </div>
    )
}

export default Overview