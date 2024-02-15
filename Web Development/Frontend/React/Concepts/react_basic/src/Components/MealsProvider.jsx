import React,{useState, createContext, useContext} from "react";

const MealsContext = createContext();
const ToDayMeals = ["A","B","C"];
const MealsProvider = ({children}) => {
    const [meals, setMealsList] = useState(ToDayMeals);

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => useContext(MealsContext);
export default MealsProvider;
