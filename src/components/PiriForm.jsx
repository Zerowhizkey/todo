import React, { useState } from "react";

function PiriForm(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const changedValue = inputValue;
    setInputValue("");
    props.onSubmit(changedValue);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />

      <button type="submit">Add</button>
    </form>
  );
}

export default PiriForm;
