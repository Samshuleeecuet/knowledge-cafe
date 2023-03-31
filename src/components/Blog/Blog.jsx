import React from 'react';

const Blog = () => {
    return (
        <div className="mt-5">
            <h3 className="text-3xl font-bold mb-5">Question and Answer</h3>
            <div className="card w-96 glass shadow-xl mb-5">
                <h2 className="card-title">Life hack</h2>
            <div className="card-body">
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Blog;