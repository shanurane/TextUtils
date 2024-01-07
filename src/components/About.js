import React from "react";

export default function About(props) {
  return (
    <div className="accordion container my-5" id="accordionExample">
      <div
        className={`accordion-item bg-${props.mode} text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <h2 className="accordion-header">
          <button
            className={`accordion-button bg-${props.mode} text-${
              props.mode === "light" ? "black" : "white"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <strong>About Text Utils</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            TetxUtils is a app for text manipulation like change text to upper
            case, change text to lower case, remove extra spaces and copy the
            manipulated text.
          </div>
        </div>
      </div>
      <div
        className={`accordion-item bg-${props.mode} text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <h2 className="accordion-header">
          <button
            className={`accordion-button bg-${props.mode} text-${
              props.mode === "light" ? "black" : "white"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <strong>Our Mission</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Our mission is to make work easy. Using text utils your work should
            be easy. Instead of changing the whole text one by one you can use
            it for the specific tasks.
          </div>
        </div>
      </div>
      <div
        className={`accordion-item bg-${props.mode} text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <h2 className="accordion-header">
          <button
            className={`accordion-button bg-${props.mode} text-${
              props.mode === "light" ? "black" : "white"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <strong>About</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Text Utils web page is developed by Shanu Rane.
          </div>
        </div>
      </div>
    </div>
  );
}
