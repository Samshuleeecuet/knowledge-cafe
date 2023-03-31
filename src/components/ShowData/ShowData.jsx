import React from 'react';


const ShowData = (props) => {
    const {readtime,bookmark} =props;
    // console.log(props);
    //console.log(bookmark);
    return (
        <>
        <div className="w-6/12 pl-4 sm:mt-6">
                <p className="text-[#5033f1] bg-blue-200 border-2 rounded border-indigo-600 font-bold px-8 py-4">Spent time on read: {readtime} min</p>
                <div className="mt-20 px-8 py-4 bg-blue-200 border-2 rounded border-indigo-600">
                    <span className="font-bold">Bookmarked Blogs: {bookmark.length}</span>
                    <div className="font-bold mt-4">
                        {
                            bookmark.map(eachItem => <p className="bg-gray-300 px-6 text-sm py-4 mt-4  border-2 rounded text-left">{eachItem}</p>)
                        }
                        
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default ShowData;