import React from "react";
import Card from "./Card";

const DisplayCardsList = ({ robotsList }) => {
  return (
    <div>
      {robotsList.map((user, i) => {
        return (
          <Card
            key={i}
            id={robotsList[i].id}
            name={robotsList[i].name}
            email={robotsList[i].email}
            phone={robotsList[i].phone}
            website={robotsList[i].website}
          />
        );
      })}
    </div>
  );
};

export default DisplayCardsList;
