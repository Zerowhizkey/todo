import React, { useState, useEffect } from "react";
import "./App.css";
import PiriForm from "./components/PiriForm";
import PiriList from "./components/PiriList";

function setStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getStorageItem(key) {
 const item = localStorage.getItem(key)
 return !item ? [] : JSON.parse(item)
}

const storageKey = "bajskorv-key-lulz"

function App() {
  const [listItem, setListItem] = useState(getStorageItem(storageKey));
  
 useEffect(() => {
  setStorageItem(storageKey, listItem)
 },[listItem])

  function handleListItem(inputValue) {
    listItem.push({
      name: inputValue,
      completed: false,
      id: Math.floor(Math.random() * 10000).toString(),
    });

    setListItem([...listItem]);
  }

  function removePiri(e) {
    const id = e.currentTarget.value;
    const index = listItem.findIndex((item) => {
      return item.id === id
    })
    
    listItem.splice(index, 1);
    setListItem([...listItem]);
  }

  function donePiri(e) {
    const id = e.currentTarget.value;
    const item = listItem.find((item) => {
      return item.id === id
    })
      console.log(item)
    if (!item) return 
    item.completed = true;
    setListItem([...listItem]);
  }
 


  return (
    <div className="App">
      <h1 className="title">Piri Todo List</h1>
      <PiriForm onSubmit={handleListItem} />
      <PiriList items={listItem} removeListItem={removePiri} checkListItem={donePiri}/>
    </div>
  );
}

export default App;
