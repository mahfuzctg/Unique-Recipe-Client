import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  return (
    <div>
      <div className=" glass rounded-lg shadow-xl">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={toPdf}
            >
              Download PDF
            </button>
          )}
        </Pdf>
        <div ref={ref} className="card-body">
          <h2 className="card-title">
            <span>First Question: </span> Tell us the differences between
            uncontrolled and controlled components.
          </h2>
          <p>
            Answer: Controlled components are controlled by the state and have a
            value set by it, while uncontrolled components have an internal
            state that determines their value.
          </p>
          <hr />
          <h2 className="card-title ">
            <span>Second Question:</span> How to validate React props using
            PropTypes
          </h2>
          <p>
            Answer: To validate React props using PropTypes, import the
            PropTypes library and define the expected prop types in the
            component's propTypes object. Use PropTypes to specify the expected
            data type and shape of each prop.
          </p>
          <hr />
          <h2 className="card-title">
            <span>Third Question:</span> Tell us the difference between nodejs
            and express js.
          </h2>
          <p>
            Answer: Node.js is a runtime environment for executing JavaScript,
            while Express.js is a framework for building web applications on top
            of Node.js.
          </p>
          <hr />
          <h2 className="card-title">
            <span>Fourth Question:</span> What is a custom hook, and why will
            you create a custom hook?
          </h2>
          <p>
            Answer: A custom hook is a reusable function that contains logic
            used across multiple components. Custom hooks simplify code reuse
            and abstraction. They can be used to extract logic related to state
            management, API calls, or any other side effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
