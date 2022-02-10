import "./App.css";
import { useState } from "react";

import Clear from "./Clear";
import Input from "./Input";
import Teclat from "./Teclat";

function App() {
  const [valor, setValor] = useState(0);
  // const [anterior, setAnterior] = useState(0);

  const handleAfegirNum = (num) => {
    setValor(num);
    console.log(valor);
  };
  return (
    <div className="container">
      <div className="App">
        <h1>Calculadora</h1>

        <Input valor={valor} />
        <Teclat passarValor={handleAfegirNum} />
        <Clear />
      </div>
    </div>
  );
}

export default App;
