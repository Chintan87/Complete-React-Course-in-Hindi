import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // *> console.log("Uppercase was clicked" + text); This console is a only for dibuging
    let newText = text.toUpperCase(); // *> toUpperCase(); is a javascript function
    setText(newText);
  };

  const handleLoClick = () => {
    // *> console.log("Lowercase was clicked" + text); This console is a only for dibuging
    let newText = text.toLowerCase(); // *> toUpperCase(); is a javascript function
    setText(newText);
  };

  const handleOnChange = (event) => {
    // *> console.log("On change"); This console is a only for dibuging
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // *> text = "new text"; // Wrong way to change the state
  // *> setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
