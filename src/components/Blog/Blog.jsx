import React from 'react';

const Blog = () => {
    return (
        <div className="mt-5">
            <h3 className="text-3xl font-bold mb-5">Question and Answer</h3>
            <div className="card w-full glass shadow-xl mb-5">
                <h2 className="card-title">1. Props Vs State</h2>
                <div className="card-body flex text-left flex-row">
                    <div className="w-11/12">
                        <p><b>Props</b></p>
                        <p>1. Props are read-only.</p>
                        <p>2. Props are immutable.</p>
                        <p>3. Props allow you to pass data from one component to other components as an argument.</p>
                        <p>4. Props can be accessed by the child component.</p>
                        <p>5. Props are used to communicate between components.</p>
                        <p>6. Props make components reusable.</p>
                        <p>7. Stateless component can have Props.</p>
                        <p>8. Props are external and controlled by whatever renders the component.</p>
                    </div>
                    <div>
                        <p><b>State</b></p>
                        <p>1. State changes can be asynchronous.</p>
                        <p>2. State is mutable.</p>
                        <p>3. State holds information about the components.</p>
                        <p>4. State cannot be accessed by child components.</p>
                        <p>5. States can be used for rendering dynamic changes with the component.</p>
                        <p>6. Stateless components cannot have State.</p>
                        <p>7. State cannot make components reusable.</p>
                        <p>8. The State is internal and controlled by the React Component itself.</p>
                    </div>
                </div>
            </div>

            <div className="card w-full glass shadow-xl mb-5">
                <h2 className="card-title">2. How does useState work?</h2>
                <div className="card-body flex text-left flex-row">
                    <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;