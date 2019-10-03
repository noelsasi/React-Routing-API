import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function About() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  });

  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const items = await data.json();
    setItems(items);
  };

  return (
    <div>
      <h2 className="mt-4">API Data</h2>
      <div className="container myc w-75 shadow mt-2 text-left">
        <h2 className="mb-4 text-danger">Try Clicking any Item</h2>
        {items.map(item => (
          <h4 className="items-list" key={item.id}>
            <Link to={`/apiData/${item.id}`}>
              <span className="badge badge-pill badge-secondary mr-3">
                {item.id}
              </span>
              <span className="text-dark">{item.title}</span>
            </Link>
          </h4>
        ))}
      </div>
    </div>
  );
}

export default About;
