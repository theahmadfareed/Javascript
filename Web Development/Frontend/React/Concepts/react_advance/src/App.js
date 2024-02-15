import "./App.css";
import Map from "./Components/Map";
import ControlledComp from "./Components/ControlledComponents";
import ContextAPI from "./Components/ContextAPI";
import { UseState, UseEffect, UseReducer } from "./Components/Hooks";
import UseRef from "./Components/Hooks";
import Async from "./Components/Async";

function App() {
  return (
    <div className="App">
      <Map />
      <ControlledComp />
      <ContextAPI />
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseRef />
      <Async />
    </div>
  );
}

export default App;
