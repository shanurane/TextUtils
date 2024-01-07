import React, { useState } from "react";

export default function TextForm(props) {
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const handleOnUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success");
  };
  const handleOnLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newTextAdd = text.split(/[ ]+/);
    setText(newTextAdd.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  return (
    <div className="my-5">
      <div
        className="mb-5 my-13 container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
          onChange={onChangeHandler}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#323639",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <nav className="navbar navbar-expand-lg">
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "info" : "outline-info"
            } my-1 mx-1`}
            onClick={handleOnUpClick}
          >
            Change To Upper Case
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "info" : "outline-info"
            } my-1 mx-1`}
            onClick={handleOnLowClick}
          >
            Change To Lower Case
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "info" : "outline-info"
            } my-1 mx-1`}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "info" : "outline-info"
            } my-1 mx-1`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "info" : "outline-info"
            } my-1 mx-1`}
            onClick={handleExtraSpaces}
          >
            Remove Extra Space
          </button>
        </nav>
      </div>
      <div
        className="container border border-secondar rounded"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters in above text
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes time takes to read
        </p>
      </div>
      <br></br>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
