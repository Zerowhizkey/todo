import React, { useState } from "react";
import "./App.css";
import PiriForm from "./components/PiriForm";

function App() {

const [listItem, setListItem] = useState([]);


function handleListItem(inputValue) {
  listItem.push(inputValue)
  setListItem([...listItem]);
}

  return (
  <div className="App">
  <h1>Piri Todo List</h1>
  <PiriForm onSubmit={handleListItem}/>
  <ul>
    {listItem.map((item, index) => {
      return <li key={index}>{item}</li>
    })}
  </ul>
  </div>

  )}

export default App;
