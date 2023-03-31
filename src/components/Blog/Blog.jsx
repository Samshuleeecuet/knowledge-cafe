import React from 'react';

const Blog = () => {
    return (
        <div className="mt-5">
            <h3 className="text-3xl font-bold mb-5">Question and Answer</h3>
            <div className="card w-full glass shadow-xl mb-5">
                <h2 className="card-title">1. Props Vs State</h2>
                <div className="card-body flex text-left flex-row">
                    <div className="w-12/12 lg:w-10/12">
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


            <div className="card w-full glass shadow-xl mb-5">
                <h2 className="card-title">3. Purpose of useEffect other than fetching data.</h2>
                <div className="card-body text-left">
                    <p>The useEffect hook in React is used to perform side effects such as fetching data, manipulating the DOM, or subscribing to events. However, there are other use cases for useEffect as well.</p>
                    <p>1. Updating the document title: You can use useEffect to update the document title based on the current state of your component. This is often used to provide additional context to the user or to improve SEO.</p>
                    <p>2. Handling keyboard shortcuts: You can use useEffect to attach event listeners to the window object and handle keyboard shortcuts. This can improve the user experience by allowing them to quickly perform common actions using the keyboard.</p>
                    <p>3. Managing animations: You can use useEffect to trigger animations based on changes in the component state. This can be done using a third-party animation library or by writing custom animation code.</p>
                    <p>4. Setting up and tearing down timers: You can use useEffect to set up timers using setTimeout or setInterval. This can be used to implement features such as countdown timers or periodic data polling.</p>
                    <p>5. Managing state outside of React: You can use useEffect to manage state outside of the React component tree. This is useful for integrating with external APIs or libraries that manage their own state.</p>
                    <p>Overall, useEffect is a versatile hook that can be used for a variety of purposes beyond just fetching data</p>
                </div>
            </div>


            <div className="card w-full glass shadow-xl mb-5">
                <h2 className="card-title">4. How Does React work?</h2>
                <div className="card-body text-left">
                    <p>React is a JavaScript library for building user interfaces. It works by allowing developers to define the structure and behavior of UI components using a declarative syntax. When a user interacts with the UI, React updates the components that need to be updated based on changes in the application state.</p>
                    <p>Here's an overview of how React works:</p>
                    <p>1. Define components: React applications are composed of one or more components. Components are defined using a special syntax called JSX, which allows developers to write HTML-like syntax in their JavaScript code.</p>
                    <p>2. Build component hierarchy: Components can be nested inside of each other to create a hierarchy of UI elements.</p>
                    <p>3. Manage state: React components can have state, which is data that can change over time. Changes to state trigger re-rendering of the component and its children.</p>
                    <p>4. Update the DOM: When a component is updated, React computes the minimal set of changes needed to update the DOM. This process is called reconciliation.</p>
                    <p>5. Virtual DOM: React uses a virtual DOM to compare the current state of the UI with the previous state and compute the changes that need to be made to the actual DOM.</p>
                    <p>6. Event handling: React provides a simple event handling system that allows developers to define how the UI should respond to user interactions.</p>
                    <p>7. Manage side effects: React provides the useEffect hook to manage side effects, such as fetching data from an API or subscribing to events outside of React.</p>
                    <p>Overall, React provides a declarative way to define UI components, manage state, and handle user interactions. It uses a virtual DOM and a reconciliation algorithm to efficiently update the UI and provide a smooth user experience.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;