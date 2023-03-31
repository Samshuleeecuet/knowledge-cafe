import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Cart = () => {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('knowledge.json')
        .then(res=>res.json())
        .then(cart => setCart(cart))
    },[]);
    // console.log(cart);
    return (
        <div className="mt-5 flex justify-between">
            <div>
            {
                cart.map(singledata => <SingleData singledata={singledata}></SingleData>)
            }
            </div>
            <div className="w-6/12">
                <p className="text-[#5033f1] bg-blue-200 border-2 rounded border-indigo-600 font-bold px-8 py-4">Spent time on read: min</p>
                <div className="mt-20 px-8 py-4 bg-blue-200 border-2 rounded border-indigo-600">
                    <span className="font-bold">Bookmarked Blogs: </span>
                    <div className="font-bold mt-4">
                        <p className="bg-gray-300 px-6 text-sm py-4 mt-4  border-2 rounded ">Master Microsoft Power</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;