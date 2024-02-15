import "tachyons";
import { useRef, useState } from "react";

function Calculator() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const add = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const sub = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const mul = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const div = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((preVal) => preVal * 0);
  };

  return (
    <div>
      <h1>Simplest Working Calculator</h1>
      <p ref={resultRef}>{result}</p>
      <input ref={inputRef} type="number" placeholder="Type a number" />
      <div className="pa3">
        <button onClick={add}>Add</button>
        <button onClick={sub}>Subtract</button>
        <button onClick={mul}>Multiply</button>
        <button onClick={div}>Divide</button>
        <button className="bg-blue white" onClick={resetInput}>
          Reset Input
        </button>
        <button className="bg-red white" onClick={resetResult}>
          Reset Result
        </button>
      </div>
    </div>
  );
}
export default Calculator;
