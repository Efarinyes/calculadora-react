import "./App.css";
import { useState } from "react";

import Clear from "./Clear";
import Input from "./Input";
import Teclat from "./Teclat";

function App() {
  const [valor, setValor] = useState(null);

  const handleClick = (num) => {
    let digit = setValor(valor + num);
    console.log(digit);
  };
  return (
    <div className="container">
      <div className="App">
        <h1>Calculadora</h1>
        <Input />
        <Teclat passarValor={handleClick} />
        <Clear />
      </div>
    </div>
  );
}

export default App;
