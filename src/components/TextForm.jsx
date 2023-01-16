import { element } from "prop-types";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // *> console.log("Uppercase was clicked" + text); This console is a only for dibuging
    let newText = text.toUpperCase(); // *> toUpperCase(); is a javascript function
    setText(newText);
    props.showAlert("Converted to uppercase!", "sucess");
  };

  const handleLoClick = () => {
    // *> console.log("Lowercase was clicked" + text); This console is a only for dibuging
    let newText = text.toLowerCase(); // *> toUpperCase(); is a javascript function
    setText(newText);
    props.showAlert("Converted to lowercase!", "sucess");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleard!", "success");
  };

  const handleOnChange = (event) => {
    // *> console.log("On change"); This console is a only for dibuging
    setText(event.target.value);
  };

  const handleCopy = () => {
    // console.log("I am coppy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //!> Removed selection for coppied text
    props.showAlert("Copied to Clipboard!", "sucess");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); // javaScript regexs
    setText(newText.join(" "));
    props.showAlert("Extra spaced removed!", "sucess");
  };

  const [text, setText] = useState("");
  // *> text = "new text"; // Wrong way to change the state
  // *> setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
