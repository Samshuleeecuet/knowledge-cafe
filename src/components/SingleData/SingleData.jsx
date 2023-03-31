import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const SingleData = (props) => {
    const {id,author_name,author_image,blog_image,blog_title,publish_date,read_time,tag}= props.singledata;
    console.log(props);

    return (
        <div>
            <div className="card lg:w-11/12 mt-5 sm:w-96 glass shadow-xl">
                <figure><img className="border rounded-xl lg:h-80" src={blog_image? blog_image : "Image Not Found"} alt=""/></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div className="flex w-full ">
                            <div className="avatar">
                                <div className="w-12 sm:h-12  rounded-full">
                                    <img src={author_image}/>
                                </div>
                            </div>
                            <div className="ml-5 text-left w-full">
                                <p className="font-bold">{author_name}</p>
                                <p className="text-gray-500">{publish_date}</p>
                            </div>
                        </div>
                       <div className="text-gray-500 w-full">
                            <span>{read_time} min read </span>
                            <button><FontAwesomeIcon icon={faBookmark} /></button>
                        </div>               
                    </div>
                    <div className="font-bold text-3xl text-left sm:text-lg py-4">
                        <p>{blog_title}</p>
                    </div>
                        <p className="text-left text-gray-600">{tag}</p>
                        <span className="btn w-44 underline text-blue-600">Mark as read</span>
                </div>
            </div>
            
        </div>
    );
};

export default SingleData;