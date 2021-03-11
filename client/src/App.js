import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  // testing fetching brand data attribute that will be added to selection list 
  const [brand, setBrand] = useState('');

  const getbrand = async (e) => {
    console.log('id', e.target.getAttribute('data-id'))
    const id = e.target.getAttribute('data-id');
    const data = await fetch(`/search/${id}`);
    const payload = await data.json();
    setBrand(payload.brand);
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to glowgo</h2>
        <button data-id="gucci" onClick={getbrand}>get brand</button>
        <h3>Brand from db is {brand}</h3>
    </div>
  );
}

export default App;
