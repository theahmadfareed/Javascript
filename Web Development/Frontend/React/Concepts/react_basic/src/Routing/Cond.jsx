import React from "react";

function Condition() {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  if (day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}`;
  } else if (day.toLowerCase() === "tuesday") {
    dayMessage = `Happy ${day}`;
  } else if (day.toLowerCase() === "wednesday") {
    dayMessage = `Happy ${day}`;
  } else if (day.toLowerCase() === "thursday") {
    dayMessage = `Happy ${day}`;
  } else if (day.toLowerCase() === "friday") {
    dayMessage = `Happy ${day}`;
  } else {
    dayMessage = "Stay Calmn and Keep Having Fun!";
  }

  return (
    <div className="App">
      <h1>Conditional Rendring</h1>
      <h1>{dayMessage}</h1>
      {morning ? "Have you had Breakfast yet?" : "Lunch Time!"}
    </div>
  );
}

export default Condition;
