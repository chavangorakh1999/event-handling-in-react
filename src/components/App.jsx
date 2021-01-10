import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [bgColor, setBgColor] = useState(false);
  function handleChange(event) {
    setName(event.target.value);
  }
  function hoverOver() {
    setBgColor(true);
  }
  function mouseOut() {
    setBgColor(false);
  }
  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ backgroundColor: bgColor ? "Black" : "White" }}
          onMouseOver={hoverOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
