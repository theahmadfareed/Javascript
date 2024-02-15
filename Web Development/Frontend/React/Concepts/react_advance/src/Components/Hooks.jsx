import React, { useState, useEffect, useReducer, useRef } from "react";
import "tachyons";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <p>My Little Lemon Goals</p>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="By...."
          value={formData.by}
          onChange={changeHandler}
        />
        <button>Submit Goals</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function UseState() {
  const [name, setName] = useState("Lemon");
  function changeName() {
    setName("Little Lemon");
  }

  const [allGoals, updateAllGoals] = useState([]);
  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      <div className="bg-light-green">
        <h1>UseState() Hook</h1>
        <p>{name}</p>
        <button onClick={changeName}>Change Name!</button>
        <GoalForm onAdd={addGoal} />
        <ListOfGoals allGoals={allGoals} />
      </div>
    </div>
  );
}

export function UseEffect() {
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle
      ? "Wellcome to Little Lemon"
      : "Using the useEffect() hook";
  }, [toggle]);

  return (
    <div className="bg-light-blue">
      <h1>UseEffect() Hook</h1>
      {toggle && <h2>Wellcome to Little Lemon</h2>}
      <button onClick={clickHandler}>Toggle Message</button>
    </div>
  );
}

const reducer = (state, action) => {
  if (action.type === "ride") return { money: state.money + 10 };
  if (action.type === "fuel") return { money: state.money - 50 };
  return new Error();
};

export function UseReducer() {
  const initialState = { money: 100 };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-light-pink">
      <h1>UseReducer() Hook</h1>
      <p>Wallet: {state.money}</p>
      <button onClick={() => dispatch({ type: "ride" })}>Ride</button>
      <button onClick={() => dispatch({ type: "fuel" })}>Fuel</button>
    </div>
  );
}

export default function UseRef() {
  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <div className="bg-light-red">
      <h1>UseRef() Hook</h1>
      <input type="text" ref={formInputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
