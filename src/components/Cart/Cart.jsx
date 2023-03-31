import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import ShowData from '../ShowData/ShowData';
//import { toast } from 'react-toastify/dist/components';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [cart,setCart]=useState([]);
    const [readtime, setReadtime]=useState(0);
    const [bookmark,setBookmark]= useState([]);
    let readtimeData = readtime;
    const handleReadtime = (time)=>{
        readtimeData = parseInt(time) + readtimeData;
        // console.log(readtimeData,parseInt(time));
        setReadtime(readtimeData);
    }

    useEffect(()=>{
        fetch('knowledge.json')
        .then(res=>res.json())
        .then(cart => setCart(cart))
    },[]);
    // console.log(cart);
    let bookMarkData = [];

    const addToBookmark = (cart)=>{
        //addToDb(cart.blog_title);
        let newBookMark = cart.blog_title;
        
        setBookmark(bookMarkData => [...bookMarkData,newBookMark]);
        
    }
    // console.log(bookmark);

    return (
        <div className="mt-5 flex justify-between">
            <div>
            {
                cart.map(singledata => <SingleData singledata={singledata} handleReadtime={handleReadtime} addToBookmark={addToBookmark} key={singledata.id}></SingleData>)
            }
            </div>
            <ShowData readtime ={readtime} bookmark={bookmark}></ShowData>
        </div>
    );
};

export default Cart;