import './App.css'
import { useState } from "react"; 

function App() {

  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState(null);

  const handleNumber = (num) => {
    setCurrent(current + num);
  };

  const handleOperator = (op) => {
    if (current === "") return;

    setOperator(op);
    setPrevious(current);
    setCurrent("");
  };

  const handleEqual = () => {
    if (!previous || !current) return;

    //parseFloat, used to accept a string and convert it into a floating-point number.
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    
    let result = 0;

    if (operator === "+") result = prev + curr;
    if (operator === "-") result = prev - curr;
    if (operator === "*") result = prev * curr;
    if (operator === "/") result = prev / curr;

    setCurrent(result.toString());
    setPrevious("");
    setOperator(null);
  };

  const handleClear = () => {
    setCurrent("");
    setPrevious("");
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">
        {previous} {operator} {current || "0"}
      </div>

      <div className="buttons">
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("/")}>/</button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("*")}>*</button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleOperator("-")}>-</button>

        <button onClick={() => handleNumber("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleOperator("+")}>+</button>
      </div>
    </div>
  );
}

export default App;
