import React, {useState,useEffect,useReducer} from "react";
import "tachyons";
import MealsProvider from "./MealsProvider";
import MealsList from "./MealsList";
import Counter from "./Counter";

const reducer = (state,action)=>{
    if(action.type === "ride") return {money: state.money+10};
    if(action.type === "fuel") return {money: state.money-50};
    return new Error();
}

function DemoComponent(props) {

    const initialState = {money:100};

    const [state,dispatch] = useReducer(reducer, initialState);

    const [num, setNum] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${num} times`;
        alert("Use Effect");

    });

    const increment = () => setNum(num+1);
    const decrement = () => setNum(num-1);


    return (
        <>
            <div className="tc">

                <div className="bg-red">
                    <p>Props</p>
                    <h1>My name = {props.name}</h1>
                </div>

                <div className="bg-yellow">
                    <p>UseState</p>
                    <button onClick={increment}  id="btn1">+</button>
                    <h1>Button count = {num}</h1>
                    <button onMouseOver={decrement} id="btn2">-</button>
                </div>

                <div className="bg-light-pink">
                    <p>UseReducer</p>
                    <h1>Wallet: {state.money}</h1>
                    <button onClick={()=> dispatch({type:"ride"})}>Ride</button>
                    <button onClick={()=> dispatch({type:"fuel"})}>Fuel</button>
                </div>

                <div className="bg-light-blue">
                    <p>UseContext</p>
                    <MealsProvider>
                        <MealsList/>
                        <Counter/>
                    </MealsProvider>
                </div>

            </div>
        </>
    );
}

export default DemoComponent;
