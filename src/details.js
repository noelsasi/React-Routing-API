import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Details({ match }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
    console.log(match);
  });

  const fetchItem = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
    );
    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div className="container mt-5">
      <div className="mt-5 w-75 mx-auto myitem text-light">
        <h2 className="font-italic">{item.title}</h2>
        <h5 className="text-left mt-3">Description: </h5>
        <p className="text-left">{item.body}</p>
      </div>
      <Link to="/apiData">
        <button class="btn mt-4 btn-success">Go Back</button>
      </Link>{" "}
    </div>
  );
}

export default Details;
