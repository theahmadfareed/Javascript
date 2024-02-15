import React, { useEffect, useState } from "react";
import "tachyons";

export default function Async() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div className="bg-light-yellow">
      <h1>Async-Fetch_API</h1>
      <h5>First Name: {user.results[0].name.first}</h5>
      <h5>Last Name: {user.results[0].name.last}</h5>
    </div>
  ) : (
    <h1>Data Pending.....</h1>
  );
}
