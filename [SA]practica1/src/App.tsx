import React, { useState } from 'react';
import './App.css';
import { ListCard } from './Components/ListCard/ListCard';
import { NumerosPalabras } from './Components/NumerosPalabras/NumerosPalabras';

function App() {
  const [peticion, setPeticion] = useState("rest")

  return (
    <div className="App">
      { peticion === "rest" ? <ListCard/> : <NumerosPalabras/> }
          


    </div>
  );
}

export default App;
